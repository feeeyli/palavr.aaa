import React from "react";
import { Container } from "./styles";

interface Props {
	locked?: boolean;
	selected?: boolean;
	value: string;
}

const Slot: React.FC<Props> = ({ locked, selected, value }) => {
	return <Container selected={selected}>{value}</Container>;
};

export { Slot };
