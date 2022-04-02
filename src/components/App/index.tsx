import React, { useEffect, useRef, useState } from "react";
import { Key } from "../Key";
import { SlotGroup, ISlotGroupRef } from "../SlotGroup";
import { Container, KeyBoard, Slots } from "./styles";

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
	"enter",
];

const App: React.FC = () => {
	const [slots, setSlots] = useState<string[]>([""]);
	const slotGroupRef = useRef<ISlotGroupRef>(null);
	const slotsRef = useRef<HTMLDivElement>(null);
	const [word, setWord] = useState("teste");

	// useEffect(() => {
	// 	document.addEventListener("keypress", (e) => {
	// 		handleKey(e.key.toLowerCase());
	// 	});
	// }, []);

	useEffect(() => {
		slotGroupRef.current?.reset();
		slotsRef.current!.scrollTop = slotsRef.current?.scrollHeight || 0;
	}, [slots]);

	function reset() {
		setSlots([""]);
		slotGroupRef.current?.reset();
		setWord(prompt("Digite uma palavra:", "teste") || "teste");
	}

	function handleKey(key: string) {
		if (key === "<=" || key === "backspace")
			return slotGroupRef.current?.removeLetter();

		if (!keys.includes(key)) return;

		if (key === "enter") {
			if (slotGroupRef.current?.value.length === 5) {
				if (word === slotGroupRef.current?.value) {
					alert("Ganhou");
					return reset();
				}
				setSlots((oldSlots) => {
					const newSlots = oldSlots.slice(0, oldSlots.length - 1);
					return [...newSlots, slotGroupRef.current?.value || "", ""];
				});

				return;
			}

			return;
		}

		return slotGroupRef.current?.addLetter(key);
	}

	return (
		<Container>
			<header>
				<button onClick={reset}>resetar</button>
				<h1>Palavra</h1>
				<span>tentativas: {slots.length - 1}</span>
			</header>
			<Slots ref={slotsRef} id="slot">
				{slots.map((_, index) => {
					const props =
						index === slots.length - 1 ? { ref: slotGroupRef } : {};
					return <SlotGroup {...props} key={index} />;
				})}
			</Slots>
			<KeyBoard>
				{keys.map((key) => (
					<Key
						keyName={key}
						key={key}
						onClick={() => handleKey(key)}
					/>
				))}
			</KeyBoard>
		</Container>
	);
};

export { App };
