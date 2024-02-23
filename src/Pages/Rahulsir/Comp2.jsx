import React, { useState } from "react";

function Comp2() {
    const [input, setInput] = useState("Indresh");

    const InputChange = (e) => {
        setInput(e.target.value);
    };

    const Submit = () => {
    };

    return (
        <div className="">
            <h1>{input}</h1>
            <input
                type="text"
                placeholder="Type Your name"
                value={input} 
                onChange={InputChange}
            />
            <button onClick={Submit}>Submit</button>
        </div>
    );
}

export default Comp2;
