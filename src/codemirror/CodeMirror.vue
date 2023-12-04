<template>
  <div class="editor" ref="containerRef"></div>
</template>

<script setup lang="ts">
import type { ModeSpec, ModeSpecOptions } from 'codemirror'
import { ref, onMounted, onBeforeUnmount, watch, inject } from 'vue'
import CodeMirror from './codemirror'
import { debounce } from '../utils'
import type { EditorProps, EditorEmits } from '../editor/types'

export interface Props {
  filename: EditorProps['filename']
  value?: EditorProps['value']
  readonly?: EditorProps['readonly']
  mode?: string | ModeSpec<ModeSpecOptions>
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  readonly: false,
  mode: 'htmlmixed',
})

const emit = defineEmits<EditorEmits>()

const containerRef = ref<HTMLDivElement>()
const needAutoResize = inject<boolean>('autoresize')
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

  const editorInstance = CodeMirror(containerRef.value!, {
    value: props.value,
    mode: props.mode,
    readOnly: props.readonly,
    tabSize: 2,
    lineWrapping: true,
    lineNumbers: true,
    ...addonOptions,
  })

  watch(
    () => props.value,
    (value) => {
      const cur = editorInstance.getValue()
      const val = typeof value !== 'string' ? '' : value
      if (cur !== val) {
        editorInstance.setValue(val)
      }
    }
  )

  watch(
    () => props.mode,
    (mode) => {
      editorInstance.setOption('mode', mode)
    }
  )

  watch(
    () => props.filename,
    () => {
      editorInstance.focus()
    }
  )

  setTimeout(() => {
    editorInstance.refresh()
  }, 50)

  if (needAutoResize) {
    const resizeFnDebounced = debounce(() => {
      editorInstance.refresh()
    })
    window.addEventListener('resize', resizeFnDebounced)
    listenersCleanup.push(() => {
      window.removeEventListener('resize', resizeFnDebounced)
    })
  }

  if (props.readonly !== true) {
    editorInstance.on('change', () => {
      emit('change', editorInstance.getValue(), props.filename)
    })

    const saveKbd = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.code === 'KeyS') {
        e.preventDefault()
        emit('save', props.filename)
      }
    }
    containerRef.value?.addEventListener('keydown', saveKbd)
    listenersCleanup.push(() => {
      containerRef.value?.removeEventListener('keydown', saveKbd)
    })
  }
})

onBeforeUnmount(() => {
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
