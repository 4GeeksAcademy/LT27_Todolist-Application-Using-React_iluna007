import React, { useState } from "react";

const Frutas = () => {
    const [inputValue, setInputValue] = useState("");
    const [frutas, setFrutas] = useState(['Manzana', 'Pera', 'Banana', 'Naranja']);
    const [count, setCount] = useState(0);

    function agregar(){ 
        console.log("Agregando fruta");
        const nuevasFrutas = [...frutas, inputValue];
        setFrutas(nuevasFrutas);
        setInputValue(""); // reset input value
        setCount(count+1);
    }

    function quitar(){ 
        console.log("Quitando fruta");
        const nuevasFrutas = frutas.slice(0, -1);
        setFrutas(nuevasFrutas);
        setCount(count-1);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            {frutas.map((fruta, index) => (
                <div key={index}>
                    {fruta}
                    <button onClick={() => quitar(index)}>Quitar</button>
                </div>
            ))}
            {count} item left
            <button onClick={agregar}>Agregar</button>
        </div>
    );
};

export default Frutas;