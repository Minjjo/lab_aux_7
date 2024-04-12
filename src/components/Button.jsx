import { useState } from "react"

export const Button = props => {
    const {text} = props
    const [count, setcount] = useState("click")
    function handlerButton() {
        alert((Math.random()*100)+1)
    } 
    return (
        <button onClick={handlerButton}>
        {count}{text} 
        </button>
    )
}