<script setup lang="ts">
import Monaco from '../monaco/Monaco.vue'
import type { EditorEmits, EditorProps } from './types'

defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

defineOptions({
  editorType: 'monaco',
})

const onChange = (code: string, fileName?: string, save?: boolean) => {
  emit('change', code, fileName, save)
}
</script>

<template>
  <Monaco
    @change="onChange"
    :filename="filename"
    :value="value"
    :readonly="readonly"
    :mode="mode"
  />
</template>
