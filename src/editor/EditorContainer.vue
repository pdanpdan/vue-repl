<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import FileSelector from './FileSelector.vue'
import Message from '../Message.vue'
import { inject, ref, watch } from 'vue'
import MessageToggle from './MessageToggle.vue'
import type { Ref } from 'vue'
import type { Store } from '../store'
import type { EditorComponentType } from './types'

const SHOW_ERROR_KEY = 'repl_show_error'

const props = defineProps<{
  editorComponent: EditorComponentType
}>()

const store = inject('store') as Store
const autoSave = inject('autosave') as Ref<number>
const showMessage = ref(getItem())

const saveTimer: Map<string, ReturnType<typeof setTimeout>> = new Map()

function onSave(fileName?: string) {
  if (typeof fileName === 'string') {
    store.state.files[fileName]?.save()
    if (saveTimer.has(fileName)) {
      clearTimeout(saveTimer.get(fileName))
      saveTimer.delete(fileName)
    }
  } else {
    for (const fileName in store.state.files) {
      store.state.files[fileName].save()
      if (saveTimer.has(fileName)) {
        clearTimeout(saveTimer.get(fileName))
        saveTimer.delete(fileName)
      }
    }
  }
}

watch(
  () => store.state.activeFile.filename,
  (_, fileName) => {
    if (autoSave.value > 0 && typeof fileName === 'string' && fileName !== '') {
      onSave(fileName)
    }
  }
)

function onChange(code: string, fileName?: string) {
  const file =
    typeof fileName === 'string'
      ? store.state.files[fileName]
      : store.state.activeFile

  if (file) {
    if (saveTimer.has(file.filename)) {
      clearTimeout(saveTimer.get(file.filename))
    }
    file.change(code)

    if (autoSave.value > 0) {
      saveTimer.set(
        file.filename,
        setTimeout(() => {
          onSave(file.filename)
        }, autoSave.value)
      )
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

onBeforeUnmount(() => {
  onSave()
})
</script>

<template>
  <FileSelector />
  <div class="editor-container">
    <props.editorComponent
      :value="store.state.activeFile.codeNext"
      :filename="store.state.activeFile.filename"
      @change="onChange"
      @save="onSave"
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
