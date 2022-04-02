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
			align: "center",
		},

		h1: { textTransform: "uppercase", color: "$white" },
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
