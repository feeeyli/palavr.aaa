import React from "react";
import { Container } from "./styles";

interface Props {
	locked?: boolean;
	selected?: boolean;
	value: string;
	status: "" | "correct" | "wrong" | "place";
}

const Slot: React.FC<Props> = ({ selected, value, status }) => {
	const statusProps = status !== "" ? { status } : {};
	return (
		<Container selected={selected} {...statusProps}>
			{value}
		</Container>
	);
};

export { Slot };
