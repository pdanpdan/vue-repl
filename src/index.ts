import type { EditorComponentType } from './editor/types'
import type { Store, SFCOptions } from './store'

export { default as Repl } from './Repl.vue'
export { default as Preview } from './output/Preview.vue'
export { ReplStore, File } from './store'
export { compileFile } from './transform'
export type { Store, StoreOptions, SFCOptions, StoreState } from './store'
export type { OutputModes } from './output/types'

export interface ReplProps {
  theme?: 'dark' | 'light'
  editor: EditorComponentType
  store?: Store
  autoSave?: number
  autoResize?: boolean
  showCompileOutput?: boolean
  showImportMap?: boolean
  showTsConfig?: boolean
  clearConsole?: boolean
  sfcOptions?: SFCOptions
  layout?: 'horizontal' | 'vertical'
  layoutReverse?: boolean
  ssr?: boolean
  previewOptions?: {
    headHTML?: string
    bodyHTML?: string
    placeholderHTML?: string
    customCodeSSR?: {
      importCode?: string
      useCode?: string
    },
    customCode?: {
      importCode?: string
      useCode?: string
    }
  }
}
