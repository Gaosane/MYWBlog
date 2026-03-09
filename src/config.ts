import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// they type of author is an extension of the type of ProfileConfig
// it adds a folder for the author
type AuthorConfig = ProfileConfig & {
	folder: string;
};

export const siteConfig: SiteConfig = {
	title: "609 自习室",
	subtitle: "BLog",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true, // Display a banner image on the top of the homepage and post pages
		src: "assets/images/背景1.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Question,
		// LinkPreset.Lc,
		// LinkPreset.Myw,
		// LinkPreset.Zxy,
	],
};

// this is a list of authors
// their folders are src/content/posts/myw, src/content/posts/lc, src/content/posts/zxy
export const authorsConfig: AuthorConfig[] = [
	{
		folder: "myw",
		name: "Yuanwen Ma",
		avatar: "assets/images/myw.jpg",
		bio: "强度工程师",
		links: [
			{
				name: "wechat",
				icon: "cib:wechat", // Visit https://icones.js.org/ for icon codes
				// You will need to install the corresponding icon set if it's not already included
				// `pnpm add @iconify-json/<icon-set-name>`
				url: "https://wechat.com",
			},
			{
				name: "telephone",
				icon: "mynaui:telephone", // Visit https://icones.js.org/ for icon codes
				url: "https://store.steampowered.com",
			},
			{
				name: "GitHub",
				icon: "fa6-brands:github",
				url: "https://github.com/Gaosane",
			},
		],
	},
	{
		folder: "lc",
		name: "Chuan Li",
		avatar: "assets/images/lc.jpg",
		bio: "强度工程师",
		links: [
			{
				name: "wechat",
				icon: "cib:wechat", // Visit https://icones.js.org/ for icon codes
				// You will need to install the corresponding icon set if it's not already included
				// `pnpm add @iconify-json/<icon-set-name>`
				url: "https://wechat.com",
			},
			{
				name: "telephone",
				icon: "mynaui:telephone", // Visit https://icones.js.org/ for icon codes
				url: "https://store.steampowered.com",
			},
			{
				name: "GitHub",
				icon: "fa6-brands:github",
				url: "https://github.com/Gaosane",
			},
		],
	},
	{
		folder: "zxy",
		name: "Xingyun Zheng",
		avatar: "assets/images/zxy.jpg",
		bio: "强度工程师",
		links: [
			{
				name: "wechat",
				icon: "cib:wechat", // Visit https://icones.js.org/ for icon codes
				// You will need to install the corresponding icon set if it's not already included
				// `pnpm add @iconify-json/<icon-set-name>`
				url: "https://wechat.com",
			},
			{
				name: "telephone",
				icon: "mynaui:telephone", // Visit https://icones.js.org/ for icon codes
				url: "https://store.steampowered.com",
			},
			{
				name: "GitHub",
				icon: "fa6-brands:github",
				url: "https://github.com/Gaosane",
			},
		],
	},
];

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/studio.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Studio 609",
	bio: "strength engineers' study room",
	links: [
		{
			name: "wechat",
			icon: "cib:wechat", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://wechat.com",
		},
		{
			name: "telephone",
			icon: "mynaui:telephone", // Visit https://icones.js.org/ for icon codes
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Gaosane",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
