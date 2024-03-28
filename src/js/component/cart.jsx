import React, {useState} from "react";

const Cart = (props) => {
  let cantidad = props.count;
//const [nombre de variable con memoria, función que modifica la variable] = valor inicial;


  const [cartItems, setCartItems] = useState(parseInt(props.count));

  function agregaritem() {
    console.log("Agregando item");
    setCartItems(cartItems + items);
  }

  function eliminarItems() {
    console.log("Eliminar compras");
    setCartItems( cartItems - 1);
  }
  function vaciar() {
    console.log("Eliminar compras");
    setCartItems(0);
  }

  const [items, setItems] = useState(1);

  function sumar() {
        console.log("Sumando");
        setItems(items + 1);
  }
  function restar() {
        console.log("Restando");
        if(items > 0){
            setItems(items - 1);
        } else {
            items = 0;
        }
        
  }



  return (
    <div>
      <h1 className="text-center mt-5">
        {cartItems}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </h1>
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://picsum.photos/seed/picsum/200/200"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Aprende React</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a onClick={agregaritem} href="#" className="btn btn-primary">
              Agrega a carrito
            </a>
            <a onClick={eliminarItems} href="#" className="btn btn-danger">
              Eliminar items
            </a>
            <a onClick={vaciar} href="#" className="btn btn-warning">
              vaciar
            </a>
            <div>
                <button onClick={sumar}>+</button>
                <input type="number" value={items} />
                <button onClick={restar}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
