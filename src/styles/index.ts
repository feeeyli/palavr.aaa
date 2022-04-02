import { createStitches } from "@stitches/react";
import { Property } from "@stitches/react/types/css";

type Flex = {
	dir?: Property.FlexDirection;
	align?: Property.AlignItems;
	justify?: Property.JustifyContent;
	wrap?: Property.FlexWrap;
	fullCenter?: boolean;
};

export const { styled, globalCss } = createStitches({
	theme: {
		colors: {
			right: "#3dae9b",
			place: "#d59a67",
			wrong: "#2d2a32",
			slotBorder: "#47434c",
			slotLocked: "#58535f",
			background: "#645d6f",
			white: "#fcfaff",
		},
	},
	utils: {
		$flex: ({
			dir = "column",
			align = "flex-start",
			justify = "flex-start",
			wrap = "nowrap",
			fullCenter,
		}: Flex) => ({
			display: "flex",
			alignItems: fullCenter ? "center" : align,
			justifyContent: fullCenter ? "center" : justify,
			flexWrap: wrap,
			flexDirection: dir,
		}),
	},
});

const globalStyles = globalCss({
	"*, input, a": { margin: 0, padding: 0, boxSizing: "border-box" },
	body: { fontFamily: "'Mitr', sans-serif", background: "$background" },
});

globalStyles();
