import React, { useState } from "react";

const Listas = () => {
    const [inputValue, setInputValue] = useState("");
    const [tarea, setTarea] = useState(['Make the bed', 'Wash my hands', 'Eat', 'Walk the dog']);
    const [count, setCount] = useState(tarea.length);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    function oprimirEnter(e){
        if(e.key === "Enter"){
            console.log("Agregando tarea");
            const nuevasListas = [...tarea, inputValue];
            setTarea(nuevasListas);
            setInputValue("que mas?"); 
            setCount(count+1);
        }
    }

    function quitar(){ 
        console.log("Quitando tarea");
        const nuevasListas = tarea.slice(0, -1);
        setTarea(nuevasListas);
        setCount(count-1);
    }

    return (
        <div>
            <div className="container text-center">
                <h1>To-Do List</h1>
            </div>
            <div className="container">
                <ul className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <li className="list-group-item opacity-50"><input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={oprimirEnter} /></li>
                    
                            {tarea.map((tarea, index) => (
                            <li className="list-group-item" key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}

                            
                            >
                                <div className="d-flex">
                                    <div className="p-2 w-100">{tarea}</div>
                                    <div className="p-2 flex-shrink-1">
                                        {hoveredIndex === index && ( 
                                            <button type="button" class="btn" onClick={() => quitar(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => quitar(index)}>
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                </svg> 
                                            </button>
                                        )}    
                                    </div>
                                </div>    
                            </li>
                        ))}
                    <li className="list-group-item">
                        <p className="opacity-50 fw-lighter">
                        {count === 0 ? "No task, add a task" : `${count} items left`}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Listas;