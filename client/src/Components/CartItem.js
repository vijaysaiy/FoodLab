import React from "react";
import { removeFromCart, setNewQuantity } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Button} from "react-bootstrap";

function CartItem(product) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(product.id));
    
  };

  const handleQty = (type, id, qty) => {
    if (type === "decrement") {
      qty > 1 && qty--;
    } else {
      qty++;
    }
    dispatch(setNewQuantity({ id, qty }));
  };

  return (     
    <div className="cart-item" key={product.id}>
       <li className="meal" key ={product.id}>
        <div>       
          <h3>{product.name}</h3>
          <div className="price">
            <p>₹{product.price}</p>
            Qty:
            <Button className="me-2 mx-2" variant="outline-danger" onClick = {()=>handleQty("decrement",product.id,product.quantity)}>-</Button>
            {product.quantity}
            <Button variant="outline-success" className="me-2 mx-2" onClick = {()=>handleQty("increment",product.id,product.quantity)}>+</Button>
            <Button className="buy-btn" variant="outline-danger" onClick ={handleClick}>Remove</Button>
          </div>
        </div>
        <p className="subtotal">₹{product.price * product.quantity}</p>
        <div></div>
      </li>          
    </div>
    
  );
}

export default CartItem;
