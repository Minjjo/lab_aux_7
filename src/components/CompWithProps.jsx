import React, { useState } from "react";

export const CompWithProps = (props) => {
    const { text } = props;
    const [inputText, setInputText] = useState(""); 

    function handlerText(event) {
        setInputText(event.target.value); 
    }
    return (
        <>
            <input type="text" value={inputText} onChange={handlerText} /> <br />
            USER: {inputText} {text}
        </>
    );
};
