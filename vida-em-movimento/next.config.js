/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,

	// env: {
	// 	API_URL: process.env.API_URL,
	// 	IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
	// },

	// publicRuntimeConfig: {
	// 	API_URL: process.env.API_URL,
	// 	IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
	// },

	images: {
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		path: "/_next/image",
		loader: "default",

		// domains: [process.env.IMAGES_DOMAIN],
	},
};
