<script lang="ts" setup>
import {
  onMounted,
  onBeforeUnmount,
  ref,
  shallowRef,
  nextTick,
  inject,
  watch,
  computed,
  type Ref,
} from 'vue'
import * as monaco from 'monaco-editor-core'
import { initMonaco } from './env'
import { getOrCreateModel } from './utils'
import type { Store } from '../store'
import type { EditorProps, EditorEmits } from '../editor/types'

const props = withDefaults(defineProps<EditorProps>(), {
  readonly: false,
})

const emit = defineEmits<EditorEmits>()

const containerRef = ref<HTMLDivElement>()
const ready = ref(false)
const editor = shallowRef<monaco.editor.IStandaloneCodeEditor>()
const replTheme = inject<Ref<'dark' | 'light'>>('theme')!
const store = inject('store') as Store

initMonaco(store)

const lang = computed(() => (props.mode === 'css' ? 'css' : 'javascript'))
let editorInstanceMounted = false

onMounted(async () => {
  const theme = await import('./highlight').then((r) => r.registerHighlighter())
  ready.value = true
  await nextTick()

  if (!containerRef.value) {
    throw new Error('Cannot find containerRef')
  }

  const editorInstance = monaco.editor.create(containerRef.value, {
    ...(props.readonly
      ? { value: props.value, language: lang.value }
      : { model: null }),
    fontSize: 13,
    tabSize: 2,
    theme: replTheme.value === 'light' ? theme.light : theme.dark,
    readOnly: props.readonly,
    automaticLayout: true,
    scrollBeyondLastLine: true,
    minimap: {
      enabled: false,
    },
    inlineSuggest: {
      enabled: false,
    },
    fixedOverflowWidgets: true,
  })
  editor.value = editorInstance
  editorInstanceMounted = true

  let currentModelFilename = ''

  // Support for semantic highlighting
  const t = (editorInstance as any)._themeService._theme
  t.getTokenStyleMetadata = (
    type: string,
    modifiers: string[],
    _language: string
  ) => {
    const _readonly = modifiers.includes('readonly')
    switch (type) {
      case 'function':
      case 'method':
        return { foreground: 12 }
      case 'class':
        return { foreground: 11 }
      case 'variable':
      case 'property':
        return { foreground: _readonly ? 21 : 9 }
      default:
        return { foreground: 0 }
    }
  }

  watch(
    () => props.value,
    (value) => {
      if (
        !editorInstance ||
        !editorInstanceMounted ||
        (props.readonly !== true && currentModelFilename !== props.filename)
      )
        return
      const cur = editorInstance.getValue()
      const val = typeof value !== 'string' ? '' : value
      if (cur !== val) {
        editorInstance.setValue(val)
      }
    },
    { immediate: true }
  )

  // update theme
  watch(replTheme, (t) => {
    if (!editorInstance || !editorInstanceMounted) return
    editorInstance.updateOptions({
      theme: t === 'light' ? theme.light : theme.dark,
    })
  })

  if (props.readonly) {
    watch(lang, (l) => {
      if (!editorInstance || !editorInstanceMounted) return
      monaco.editor.setModelLanguage(editorInstance.getModel()!, l)
    })
  } else {
    watch(
      () => props.filename,
      (newFilename, oldFilename) => {
        if (!editorInstance || !editorInstanceMounted) return
        const newFile = store.state.files[newFilename]
        if (!newFile) return null
        const model = getOrCreateModel(
          monaco.Uri.parse(`file:///${newFilename}`),
          newFile.language,
          newFile.codeNext
        )

        const oldFile = oldFilename ? store.state.files[oldFilename] : null
        if (oldFile) {
          oldFile.editorViewState = editorInstance.saveViewState()
        }

        editorInstance.setModel(model)

        if (newFile.editorViewState) {
          editorInstance.restoreViewState(newFile.editorViewState)
          editorInstance.focus()
        }

        currentModelFilename = newFilename

        const cur = editorInstance.getValue()
        const val = typeof props.value !== 'string' ? '' : props.value
        if (cur !== val) {
          editorInstance.setValue(val)
        }
      },
      { immediate: true }
    )
    editorInstance.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
      () => {
        emit('save', props.filename)
      }
    )

    editorInstance.onDidChangeModelContent(() => {
      emit('change', editorInstance.getValue(), props.filename)
    })
  }
})

onBeforeUnmount(() => {
  editorInstanceMounted = false
  editor.value?.dispose()
})
</script>

<template>
  <div class="editor" ref="containerRef"></div>
</template>

<style>
.editor {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
