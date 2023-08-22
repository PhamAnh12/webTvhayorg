import colors from 'vuetify/es5/util/colors'
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzlmYzZkMjUwNDIyN2ZjNDVlOWU3MDE0YzllMDdhMCIsInN1YiI6IjY0ZTA1OWJkZTE5ZGU5MDEwMGU4YWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5IWZKlj1Z2GAgvGKEyaSDry9M0rEcKfgudu_FOHh8A";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - tvhayorg',
    title: 'tvhayorg',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/tvhay.svg'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
   // https://go.nuxtjs.dev/axios
   "@nuxtjs/axios",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:  "https://api.themoviedb.org/3/",
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  },


  serverMiddleware: [
    { path: "/api", handler: "~/server-middleware/api/rest.js" },
  ],
}
