/// <reference types="vite/client" />

/**
 * 环境变量类型
 */
interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_PORT: string
  readonly VITE_BASE_API_PROXY: string
  readonly VITE_GITHUB_CLIENT_ID: string
  readonly VITE_GOOGLE_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
