import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Slot } from "../Slot";
import { Container } from "./styles";

export interface ISlotGroupRef {
	addLetter: (letter: string) => string;
	removeLetter: () => string;
	value: string;
	reset: () => void;
}

const SlotGroup = forwardRef<ISlotGroupRef>(({}, ref) => {
	const [text, setText] = useState<string>("");

	function addLetter(letter: string): string {
		if (text.length >= 5) return text;
		setText((oldText) => oldText + letter);

		return text + letter;
	}

	function removeLetter(): string {
		if (text.length <= 0) return text;
		setText((oldText) => oldText.replace(/\w$/g, ""));

		return text.replace(/\w$/g, "");
	}

	useImperativeHandle(ref, () => {
		return {
			addLetter,
			removeLetter,
			value: text,
			reset: () => setText(""),
		};
	});

	return (
		<Container>
			{[0, 1, 2, 3, 4].map((index) => (
				<Slot
					value={text[index]}
					selected={index === text.length}
					key={index}
				/>
			))}
		</Container>
	);
});

export { SlotGroup };
