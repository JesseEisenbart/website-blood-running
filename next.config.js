module.exports = {
	async redirects() {
		return [
			{
				source: '/discord',
				destination:
					'https://discord.gg/dead-unicorn-772603203246227547',
				permanent: true,
			},
			{
				source: '/presskit',
				destination:
					'https://drive.google.com/drive/folders/1BOiXRi2ysKJXfx4KrQulw0j5O4cc0vjO',
				permanent: true,
			},
		];
	},
};
