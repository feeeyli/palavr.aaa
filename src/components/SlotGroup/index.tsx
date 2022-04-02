import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Slot } from "../Slot";
import { Container } from "./styles";

export interface ISlotGroupRef {
	addLetter: (letter: string) => string;
	removeLetter: () => string;
	value: string;
	reset: () => void;
	reveal: (correctWord: string) => void;
}

const SlotGroup = forwardRef<ISlotGroupRef>(({}, ref) => {
	const [text, setText] = useState<string>("");
	const [slots, setSlots] = useState<("" | "correct" | "wrong" | "place")[]>([
		"",
		"",
		"",
		"",
		"",
	]);

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

	function reveal(correctWord: string) {
		const revealedSlots = Array.from(text).map((letter, index) => {
			if (letter === correctWord[index]) return "correct";
			if (correctWord.includes(letter)) return "place";
			if (!correctWord.includes(letter)) return "wrong";

			return "";
		});

		setSlots(revealedSlots);
	}

	useImperativeHandle(ref, () => {
		return {
			addLetter,
			removeLetter,
			value: text,
			reset: () => setText(""),
			reveal,
		};
	});

	return (
		<Container>
			{slots.map((status, index) => (
				<Slot
					value={text[index]}
					status={status}
					selected={index === text.length}
					key={index}
				/>
			))}
		</Container>
	);
});

export { SlotGroup };
