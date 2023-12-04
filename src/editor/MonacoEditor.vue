<script setup lang="ts">
import { computed } from 'vue'
import Monaco from '../monaco/Monaco.vue'
import type { EditorEmits, EditorProps } from './types'

const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

defineOptions({
  editorType: 'monaco',
})

const onChange = (code: string, filename?: string) => {
  emit('change', code, filename)
}

const onSave = (filename?: string) => {
  emit('save', filename)
}

const activeMode = computed(() => {
  const { mode: forcedMode, filename } = props
  return forcedMode
    ? forcedMode
    : ['css', 'sass', 'scss', 'less'].includes(filename.split('.').pop()!)
      ? 'css'
      : 'js'
})
</script>

<template>
  <Monaco
    :value="value"
    :filename="filename"
    :readonly="readonly"
    :mode="activeMode"
    @change="onChange"
    @save="onSave"
  />
</template>
