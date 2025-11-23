interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}