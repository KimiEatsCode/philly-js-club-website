import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	color: {
		brand: "green",
	},
	font: {
		body: "arial",
	},
});
