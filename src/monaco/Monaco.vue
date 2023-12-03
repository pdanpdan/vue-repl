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
import { loadGrammars, loadTheme } from 'monaco-volar'
import { debounce } from '../utils'
import type { Store } from '../store'
import type { EditorEmits, PreviewMode } from '../editor/types'

export interface Props {
  filename: string
  value?: string
  readonly?: boolean
  mode?: PreviewMode
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
})

const emit = defineEmits<EditorEmits>()

const containerRef = ref<HTMLDivElement>()
const ready = ref(false)
const editor = shallowRef<monaco.editor.IStandaloneCodeEditor>()
const replTheme = inject<Ref<'dark' | 'light'>>('theme')!
const autoSave = inject('autosave') as () => number
const store = inject('store') as Store

initMonaco(store)

const lang = computed(() => (props.mode === 'css' ? 'css' : 'javascript'))

onMounted(async () => {
  const theme = await loadTheme(monaco.editor)
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
    scrollBeyondLastLine: false,
    minimap: {
      enabled: false,
    },
    inlineSuggest: {
      enabled: false,
    },
    'semanticHighlighting.enabled': true,
    fixedOverflowWidgets: true,
  })
  editor.value = editorInstance

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
      if (editorInstance.getValue() === value) return
      editorInstance.setValue(value || '')
    },
    { immediate: true }
  )

  watch(lang, (lang) =>
    monaco.editor.setModelLanguage(editorInstance.getModel()!, lang)
  )

  if (!props.readonly) {
    watch(
      () => props.filename,
      (_, oldFilename) => {
        if (!editorInstance) return
        const file = store.state.files[props.filename]
        if (!file) return null
        const model = getOrCreateModel(
          monaco.Uri.parse(`file:///${props.filename}`),
          file.language,
          file.code
        )

        const oldFile = oldFilename ? store.state.files[oldFilename] : null
        if (oldFile) {
          oldFile.editorViewState = editorInstance.saveViewState()
        }

        editorInstance.setModel(model)

        if (file.editorViewState) {
          editorInstance.restoreViewState(file.editorViewState)
          editorInstance.focus()
        }
      },
      { immediate: true }
    )
  }

  await loadGrammars(monaco, editorInstance)

  const saveFn = (save?: boolean) => {
    emit(
      'change',
      editorInstance.getValue(),
      store.state.activeFile.filename,
      save === true
    )
  }

  editorInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
    saveFn(true)
  })

  let onEditorChange = () => {}
  let onEditorBlur = () => {}

  editorInstance.onDidChangeModelContent(() => {
    onEditorChange()
  })
  editorInstance.onDidBlurEditorWidget(() => {
    onEditorBlur()
  })

  watch(
    autoSave,
    (v) => {
      if (v > 0) {
        const saveFnDebounced = debounce(() => {
          saveFn(true)
        }, v)
        onEditorChange = () => {
          saveFn()
          saveFnDebounced()
        }
        onEditorBlur = () => {
          saveFn(true)
        }
      } else {
        onEditorChange = () => {
          saveFn()
        }
        onEditorBlur = () => {}
      }
    },
    { immediate: true }
  )

  // update theme
  watch(replTheme, (n) => {
    editorInstance.updateOptions({
      theme: n === 'light' ? theme.light : theme.dark,
    })
  })
})

onBeforeUnmount(() => {
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
