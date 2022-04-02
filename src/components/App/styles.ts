import { styled } from "@styles";

export const Container = styled("div", {
	width: "100vw",
	height: "100vh",
	$flex: {
		justify: "space-between",
		align: "center",
	},
	paddingBottom: 8,

	header: {
		$flex: {
			dir: "row",
			justify: "space-between",
			align: "center",
		},
		width: "100%",
		padding: "0 64px",

		h1: { textTransform: "uppercase", color: "$white" },

		button: {
			background: 0,
			border: 0,
			color: "$white",
			fontWeight: 600,
			padding: "4px 8px",
			transition: "all .1s ease-in-out",
			cursor: "pointer",

			"&:hover": {
				background: "$slotBorder",
			},
		},

		span: {
			color: "$white",
			fontWeight: 400,
			padding: "4px 8px",
		},
	},
});

export const KeyBoard = styled("div", {
	display: "grid",
	gridTemplateColumns: "repeat(10, 1fr)",
	gridAutoRows: "1fr 1fr 1fr",
	gap: 6,

	"button:last-child": {
		gridColumnStart: 8,
		gridColumnEnd: 11,
	},
});

export const Slots = styled("div", {
	$flex: {},
	gap: 8,
	overflowY: "scroll",
	margin: "32px 0",
	padding: "0 16px",
	scrollbarWidth: "none",

	"&::-webkit-scrollbar": { display: "none" },
});
