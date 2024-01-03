import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	exclude: [],
	include: ["./app/**/*.{j,t}s?"],
	outdir: "styled-system",
	outExtension: "js",
	preflight: true,
	strictTokens: true,
	theme: {
		breakpoints: {
			small: "700px",
			medium: "1000px",
			large: "1400px",
		},
		textStyles: {
			body: {
				value: {
					fontSize: "medium",
					fontWeight: "light",
					lineHeight: "medium",
				},
			},
			large: {
				value: {
					fontSize: "large",
					fontWeight: "large",
				},
			},
			larger: {
				value: {
					fontSize: "larger",
					fontWeight: "larger",
				},
			},
			medium: {
				value: {
					fontSize: "medium",
					fontWeight: "medium",
				},
			},
			smaller: {
				value: {
					fontSize: "smaller",
					fontWeight: "smaller",
				},
			},
			underline: {
				value: {
					textDecoration: "underline",
				},
			},
		},
		tokens: {
			colors: {
				background: { value: "#efdb4f" },
				foreground: { value: "#323330" },
			},
			fontSizes: {
				smaller: { value: "clamp(1.5rem, 2vw, 2rem)" },
				small: { value: "clamp(1.5rem, 4vw, 2rem)" },
				medium: { value: "clamp(1.5rem, 4vw, {fontSizes.large})" },
				large: { value: "clamp(2rem, 4vw, 3rem)" },
				larger: { value: "clamp(2.5rem, 5vw, 5rem)" },
				title: { value: "clamp(7rem, 13vw, 15rem)" },
			},
			fontWeights: {
				light: { value: 400 },
				medium: { value: 600 },
				large: { value: 700 },
				larger: { value: 700 },
				title: { value: 900 },
			},
			lineHeights: {
				medium: { value: "clamp(1.5rem, 6vw, {fontSizes.medium})" },
				title: { value: "clamp(5.5rem, 12vw, 12rem)" },
			},
		},
	},
});
