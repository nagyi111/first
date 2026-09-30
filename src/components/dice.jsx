import { useState } from "react";
import { RandomQuote } from './randomQuote';

import {
    FaDiceOne,
    FaDiceTwo,
    FaDiceThree,
    FaDiceFour,
    FaDiceFive,
    FaDiceSix
} from "react-icons/fa";

export const Dices = () => {

    const [nr, setNr] = useState(1);

    const diceComponents = {
        1: <FaDiceOne size={80} />,
        2: <FaDiceTwo size={80} />,
        3: <FaDiceThree size={80} />,
        4: <FaDiceFour size={80} />,
        5: <FaDiceFive size={80} />,
        6: <FaDiceSix size={80} />
    };

    const resetDice = () => {
        let newNumber;

        do {
            newNumber = Math.floor(Math.random() * 6) + 1;
        } while (newNumber === nr);

        setNr(newNumber);
    };

    const resetStyle = {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "10px"
    };

    return (
    <div className="w-fit mx-auto mt-6 border border-gray-300 rounded-2xl p-6 shadow-md text-center">

        <h2 className="text-2xl font-bold mb-4">
            Dice Roller
        </h2>

        <div className="flex justify-center mb-4">
            {diceComponents[nr]}
        </div>

        <button
            type="button"
            onClick={resetDice}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
            Reset
        </button>

        <RandomQuote diceValue={nr} />

    </div>
);
};