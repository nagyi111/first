import React from 'react';
import { quotesFromDatabase } from './data';
import { generateRandNr } from './utils';

export const RandomQuote = ({ diceValue }) => {

    const randomIndex = generateRandNr(
        diceValue - 1,
        quotesFromDatabase.length - 1

    );

    console.log(randomIndex)

    return (
        <div>
            <h3>Random Quote</h3>

            <p>
                {quotesFromDatabase[randomIndex]}
            </p>
        </div>
    );
};

export default RandomQuote;