<script setup lang="ts">
import FileSelector from './FileSelector.vue'
import Message from '../Message.vue'
import { inject, ref, watch } from 'vue'
import MessageToggle from './MessageToggle.vue'
import type { Store } from '../store'
import type { EditorComponentType } from './types'

const SHOW_ERROR_KEY = 'repl_show_error'

const props = defineProps<{
  editorComponent: EditorComponentType
}>()

const store = inject('store') as Store
const showMessage = ref(getItem())

function onChange(code: string, fileName?: string, save: boolean = false) {
  const file =
    typeof fileName === 'string'
      ? store.state.files[fileName]
      : store.state.activeFile
  if (file) {
    if (save) {
      file.code = code
    }

    const changed = save !== true && code !== file.code
    if (file.changed !== changed) {
      file.changed = changed
    }
  }
}

function setItem() {
  localStorage.setItem(SHOW_ERROR_KEY, showMessage.value ? 'true' : 'false')
}

function getItem() {
  const item = localStorage.getItem(SHOW_ERROR_KEY)
  return !(item === 'false')
}

watch(showMessage, () => {
  setItem()
})
</script>

<template>
  <FileSelector />
  <div class="editor-container">
    <props.editorComponent
      @change="onChange"
      :value="store.state.activeFile.code"
      :filename="store.state.activeFile.filename"
    />
    <Message v-show="showMessage" :err="store.state.errors[0]" />
    <MessageToggle v-model="showMessage" />
  </div>
</template>

<style scoped>
.editor-container {
  height: calc(100% - var(--header-height));
  overflow: hidden;
  position: relative;
}
</style>
