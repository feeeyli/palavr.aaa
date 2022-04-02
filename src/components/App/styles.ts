import { styled } from "@styles";

export const Container = styled("div", {
	width: "100vw",
	height: "100vh",
	$flex: {
		justify: "space-between",
		align: "center",
	},

	header: {
		$flex: {
			align: "center",
		},

		h1: { textTransform: "uppercase", color: "$white" },
	},
});
