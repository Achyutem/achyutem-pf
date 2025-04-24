import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import github from "@astrojs/github";

export default defineConfig({
	site: "https://achyutem.github.io/",
	output: "static",
	integrations: [mdx(), sitemap(), tailwind(), github()],
});
