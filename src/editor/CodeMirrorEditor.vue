<script setup lang="ts">
import { computed } from 'vue'
import CodeMirror, { type Props } from '../codemirror/CodeMirror.vue'
import type { EditorEmits, EditorProps } from './types'

defineOptions({
  editorType: 'codemirror',
})

const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

const onChange = (code: string, filename?: string) => {
  emit('change', code, filename)
}

const onSave = (filename?: string) => {
  emit('save', filename)
}

const modes: Record<string, Props['mode']> = {
  css: 'css',
  sass: 'sass',
  scss: 'css',
  less: 'css',
  md: 'gfm',
  html: 'htmlmixed',
  js: {
    name: 'javascript',
  },
  json: {
    name: 'javascript',
    json: true,
  },
  ts: {
    name: 'javascript',
    typescript: true,
  },
  vue: 'htmlmixed',
}

const activeMode = computed(() => {
  const { mode: forcedMode, filename } = props
  const mode = modes[forcedMode || filename.split('.').pop()!]
  return filename.lastIndexOf('.') !== -1 && mode ? mode : modes.js
})
</script>

<template>
  <CodeMirror
    :value="value"
    :filename="filename"
    :readonly="readonly"
    :mode="activeMode"
    @change="onChange"
    @save="onSave"
  />
</template>
