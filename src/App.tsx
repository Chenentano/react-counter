import { useState, useEffect } from 'react';

function getMessage(count: number): string | null {
    if (count === 0) {
        return null;
    } else if (count % 3 === 0 && count % 5 === 0) {
        return "LoL";
    } else if (count % 5 === 0) {
        return "KEKW";
    } else if (count % 3 === 0) {
        return "LMAO";
    } else {
        return count.toString();
    }
}

function App() {
    const [count, setCount] = useState<number>(0);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        setMessage(getMessage(count));
    }, [count]);

    const incrementCount = () => {
        setCount(count + 1);
        setMessage(getMessage(count + 1));
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setMessage(getMessage(count - 1));
        } else {
            console.log("UNTER 0 IST VERBOTEN!!111!");
        }
    };

    return (
        <>
            <h1 className="header">{message ?? count}</h1>
            <h2 className="headerTwo">{count}</h2>
            <div className="button">
                <button onClick={decrementCount}>-</button>
                <button onClick={incrementCount}>+</button>
            </div>
        </>
    );
}

export default App;
