import React from "react";
import { Key } from "../Key";
import { Container, KeyBoard } from "./styles";

const keys = [
	"q",
	"w",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"<=",
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	"Enter",
];

const App: React.FC = () => {
	function handleKeyClick(key: string) {
		console.log(key);
	}

	return (
		<Container>
			<header>
				<h1>Palavra</h1>
			</header>
			<KeyBoard>
				{keys.map((key) => (
					<Key
						keyName={key}
						key={key}
						onClick={() => handleKeyClick(key)}
					/>
				))}
			</KeyBoard>
		</Container>
	);
};

export { App };
