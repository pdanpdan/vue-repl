<script setup lang="ts">
import { computed } from 'vue'
import Monaco from '../monaco/Monaco.vue'
import type { EditorEmits, EditorProps } from './types'

const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

defineOptions({
  editorType: 'monaco',
})

const onChange = (code: string, fileName?: string, save?: boolean) => {
  emit('change', code, fileName, save)
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
    @change="onChange"
    :filename="filename"
    :value="value"
    :readonly="readonly"
    :mode="activeMode"
  />
</template>
