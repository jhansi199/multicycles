require('dotenv').config()

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'The true API for shared mobility',
    titleTemplate: '%s - Multicycles API',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The true API for shared mobility. Get all data about shared vehicles arround the word in a single request. Find the position and book the vehicles closest to you.'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'The true API for shared mobility - Multicycles API'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The true API for shared mobility. Get all data about shared vehicles arround the word in a single request. Find the position and book the vehicles closest to you.'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@multicycles'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'The true API for shared mobility - Multicycles API'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'The true API for shared mobility - Multicycles API'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'The true API for shared mobility. Get all data about shared vehicles arround the word in a single request. Find the position and book the vehicles closest to you.'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_US'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }
    ],

    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#151a26' },
      { name: 'msapplication-TileColor', content: '#151a26' },
      { name: 'theme-color', content: '#151a26' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300' }
    ],
    script: [{ src: 'https://js.stripe.com/v3/' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#677fb7' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.flow$/,
        loader: 'ignore-loader'
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    '~/plugins/highlight',
    '~/plugins/filters',
    '~/plugins/copy',
    '~/plugins/react',
    { src: '~plugins/me.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/dotenv',
    [
      'nuxt-env',
      {
        keys: [
          'BASE_URL',
          'MULTICYCLES_API',
          'MULTICYCLES_ACCESS_TOKEN',
          'SENTRY_KEY',
          'ANALYTICS_KEY',
          'MAPBOX_KEY',
          'STRIPE_PUBLIC_KEY'
        ]
      }
    ],
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    '@nuxtjs/apollo',
    '@nuxtjs/moment'
  ],
  sentry: {
    dsn: process.env.SENTRY_KEY
  },
  apollo: {
    clientConfigs: {
      default: '~/apollo/default.js'
    }
  }
}
