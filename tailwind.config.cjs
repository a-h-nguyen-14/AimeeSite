const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
],

	theme: {
		extend: {
			colors: {
				'senshi-blue': "#0c7fc3",
			}
		},
		container: {
			'center': 'true',
		},
	},

	plugins: [
		require('flowbite/plugin'),
	]
};

module.exports = config;
