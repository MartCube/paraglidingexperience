const pkg = require('./package')

module.exports = {
	mode: 'universal',
	head: {
		title: pkg.name,
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' }, { name: 'keywords', content: 'mart, cube, portfolio, site, web, developer' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' }],
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	plugins: [{ src: `~plugins/ObserveVisibility`, ssr: true }, { src: '~/plugins/v-calendar.js', ssr: false }, { src: '~/plugins/v-select.js', ssr: false }, { src: `~/plugins/lazysizes.client.js`, ssr: true }, { src: `~/plugins/vee-validate.js` }],

	// Nuxt.js modules
	modules: [],

	// Build configuration
	build: {
		// You can extend webpack config here

		transpile: ['vee-validate/dist/rules'],

		extend(
			config,
			{
				isDev,
				isClient,
				loaders: { vue },
			},
		) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},
	},
}
