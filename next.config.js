module.exports = {
	async redirects() {
		return [
			{
				source: '/discord',
				destination:
					'https://discord.gg/dead-unicorn-772603203246227547',
				permanent: true,
			},
		];
	},
};
