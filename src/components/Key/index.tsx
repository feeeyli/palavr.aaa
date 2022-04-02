import React from "react";
import { Container } from "./styles";

const Key: React.FC<{
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	keyName: string;
}> = ({ onClick, keyName }) => {
	return (
		<Container onClick={onClick} data-key={keyName}>
			{keyName}
		</Container>
	);
};

export { Key };
