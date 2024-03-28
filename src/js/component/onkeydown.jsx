import React, {useState} from "react";

const Onkeydown = () => {
    const {inputValue1, setInputValue1} = useState("");
    function oprimirEnter(e){
        if(e.key === "Enter"){
            console.log("Se oprimió la tecla Enter");
        }
    }
    return (
        <div>
            <h1>Evento onkeydown</h1>
            <input type="text" onKeyDown={oprimirEnter} 
            value={inputValue1}
            onChange={(e)=>{setInputValue1(e.target.value)}}/>
        </div>
    );
};

export default Onkeydown;