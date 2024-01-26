require('dotenv').config()

export default {
  // グローバルなページヘッダー
  head: {
    title: 'talkfriend',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // グローバルなCSS
  css: [],

  // プラグイン
  plugins: [],

  // 自動インポートされるコンポーネント
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // モジュール
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // モジュールの設定
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // ビルド設定
  build: {},

  // サーバーミドルウェア
  serverMiddleware: [
    { path: '/api/env', handler: '~/server-middleware/env.ts' },
  ],

  // 環境変数
  env: {
    apiKey: process.env.API_KEY
  },
  
  // レンダリングモード
  ssr: false, // サーバーサイドレンダリングを無効にする

  // 開発モードの設定
  dev: process.env.NODE_ENV !== 'production',
}
