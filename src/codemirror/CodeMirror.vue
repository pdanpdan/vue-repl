<template>
  <div class="editor" ref="containerRef"></div>
</template>

<script setup lang="ts">
import type { ModeSpec, ModeSpecOptions } from 'codemirror'
import { ref, onMounted, onUnmounted, watch, watchEffect, inject } from 'vue'
import CodeMirror from './codemirror'
import { debounce } from '../utils'
import type { Store } from '../store'
import type { EditorEmits } from '../editor/types'

export interface Props {
  mode?: string | ModeSpec<ModeSpecOptions>
  value?: string
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'htmlmixed',
  value: '',
  readonly: false,
})

const emit = defineEmits<EditorEmits>()

const containerRef = ref<HTMLDivElement>()
const needAutoResize = inject<boolean>('autoresize')
const autoSave = inject('autosave') as () => number
const store = inject<Store>('store')
const listenersCleanup = [] as Array<() => void>

onMounted(() => {
  const addonOptions = props.readonly
    ? {}
    : {
        autoCloseBrackets: true,
        autoCloseTags: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        keyMap: 'sublime',
        extraKeys: {
          Tab: 'emmetExpandAbbreviation',
          Esc: 'emmetResetAbbreviation',
          Enter: 'emmetInsertLineBreak',
        },
        emmet: {
          mark: true,
          markTagPairs: true,
          previewOpenTag: true,
          preview: true,
          autoRenameTags: true,
        },
      }

  const editor = CodeMirror(containerRef.value!, {
    value: '',
    mode: props.mode,
    readOnly: props.readonly,
    tabSize: 2,
    lineWrapping: true,
    lineNumbers: true,
    ...addonOptions,
  })

  watchEffect(() => {
    const cur = editor.getValue()
    if (props.value !== cur) {
      editor.setValue(props.value)
    }
  })

  watchEffect(() => {
    editor.setOption('mode', props.mode)
  })

  const saveFn = debounce((save?: boolean) => {
    emit(
      'change',
      editor.getValue(),
      store!.state.activeFile.filename,
      save === true
    )
  }, 1)

  let onEditorChange = () => {}
  let onEditorBlur = () => {}

  editor.on('change', () => {
    onEditorChange()
  })
  editor.on('blur', () => {
    onEditorBlur()
  })

  watch(
    autoSave,
    (v) => {
      if (v > 0) {
        const saveFnDebounced = debounce(() => {
          saveFn(true)
        }, v)
        saveFnDebounced()

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

  const saveKbd = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyS') {
      e.preventDefault()
      saveFn(true)
    }
  }
  containerRef.value?.addEventListener('keydown', saveKbd)
  listenersCleanup.push(() => {
    containerRef.value?.removeEventListener('keydown', saveKbd)
  })

  setTimeout(() => {
    editor.refresh()
  }, 50)

  if (needAutoResize) {
    const resizeFnDebounced = debounce(() => {
      editor.refresh()
    })
    window.addEventListener('resize', resizeFnDebounced)
    listenersCleanup.push(() => {
      window.removeEventListener('resize', resizeFnDebounced)
    })
  }
})

onUnmounted(() => {
  const cleanup = listenersCleanup.slice()
  listenersCleanup.length = 0
  cleanup.forEach((fn) => fn())
})
</script>

<style>
.editor {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.CodeMirror {
  font-family: var(--font-code);
  line-height: 1.5;
  height: 100%;
}
</style>
