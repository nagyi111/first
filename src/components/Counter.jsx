import { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MyImage } from './MyImage';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const h2Style = {
        textAlign: "center",
        color: "blue"
    };

    const btnMinusStyle = {
        opacity: counter <= -5 ? 0.4 : 1,
        cursor: counter <= -5 ? 'not-allowed' : 'pointer',
        background: 'transparent',
        border: 'none'
    };

    const btnPlusStyle = {
        opacity: counter >= 5 ? 0.4 : 1,
        cursor: counter >= 5 ? 'not-allowed' : 'pointer',
        background: 'transparent',
        border: 'none'
    };

    const resetStyle = {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
    };

    const nrStyle = {
        color:
            counter < 0
                ? "red"
                : counter > 0
                    ? "green"
                    : "black",
        fontWeight: "bold",
        fontSize: "30px"
    };

    return (
        <div>

            <h2 style={h2Style}>
                My counter component
            </h2>

            <div className="counter">

                <button
                    type="button"
                    style={btnMinusStyle}
                    disabled={counter <= -5}
                    onClick={() => setCounter(prev => prev - 1)}
                >
                    <CiCircleMinus
                        size={40}
                        color="blue"
                    />
                </button>

                <div
                    className="nr"
                    style={nrStyle}
                >
                    {counter}
                </div>

                <button
                    type="button"
                    style={btnPlusStyle}
                    disabled={counter >= 5}
                    onClick={() => setCounter(prev => prev + 1)}
                >
                    <CiCirclePlus
                        size={40}
                        color="#431cceff"
                    />
                </button>

                <button
                    type="button"
                    style={resetStyle}
                    onClick={() => setCounter(0)}
                >
                    Reset
                </button>

            </div>

            {counter > 0 && counter <= 5 && (
                <MyImage counter={counter} />
            )}

        </div>
    );
};

export default Counter;