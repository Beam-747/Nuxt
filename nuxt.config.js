export default {
  server: {
    port: process.env.HTTP_PORT || 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'MAJOR168 เว็บบอลออนไลน์ คาสิโนสด อาณาจักรแห่งความสนุกสุดมันส์',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/plugins/simplyscroll/jquery.simplyscroll.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css',
      },
    ],
    script: [
      { type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
      { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
      { type: 'text/javascript', src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
      { type: 'text/javascript', src: 'https://kit.fontawesome.com/f59f2f6742.js' },
      { type: 'text/javascript', src: '/plugins/simplyscroll/jquery.simplyscroll.min.js' },
      { type: 'text/javascript', src: '/plugins/scroll.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js' },
      { type: 'text/javascript', src: 'https://static.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js' },
      { type: 'text/javascript', src: 'https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js' },
      { type: 'text/javascript', src: '/plugins/clock.js' },
      { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js' },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/style.css', '~/assets/css/custom.css', '~/assets/css/icon.css', '~/assets/css/profile.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/aos', mode: 'client' },
    { src: '@/plugins/getCredit', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'vue-sweetalert2/nuxt',
    'nuxt-clipboard2',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: false,
          logout: false,
          user: false,
        },
      },
    },
  },

  // auth: {
  //   redirect: {
  //     login: '/login',
  //     home: '/profile',
  //   },
  //   strategies: {
  //     loginpc: {
  //       _scheme: 'local',
  //       endpoints: {
  //         login: {
  //           url: process.env.API_LOGIN_URL || 'http://127.0.0.1:3500/api/login',
  //           method: 'post',
  //           propertyName: 'token',
  //         },
  //         logout: {
  //           url: process.env.API_LOGOUT_URL || 'http://127.0.0.1:3500/api/logout',
  //           method: 'post',
  //         },
  //         user: {
  //           url: process.env.API_USER_INFO_URL || 'http://127.0.0.1:3500/api/member/info',
  //           method: 'get',
  //           propertyName: 'member',
  //         },
  //       },
  //     },
  //   },
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  env: {
    apiUrl: process.env.API_URL || 'http://127.0.0.1:3500/',
    gameUrl: process.env.API_PLAY_GAME_URL || 'http://play.major168.com/',
  },
}
