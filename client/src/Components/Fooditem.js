import {React,useState} from 'react'
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {addToCart} from '../redux/cartRedux'
function Fooditem(item) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)
  function handleQty(type){
    if (type === "decrement") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 5 && setQuantity(quantity + 1);
    }
  }
   function handleClick(){
      dispatch(addToCart({...item,quantity}))
   }
     
   return (
    <li className="meal" key ={item.id}>         
    <div>
      <h3>{item.name}</h3>
      <div className="description"><p> {item.description}</p></div>
      <div className="price">
        <p>₹{item.price}</p>
        Qty:
        <Button className="me-2 mx-2" variant="outline-danger" onClick = {()=>handleQty("decrement")}>-</Button>
        {quantity}
        <Button variant="outline-success" className="me-2 mx-2" onClick = {()=>handleQty("increment")}>+</Button>
        <Button className="buy-btn"onClick ={handleClick}> Add</Button>
      </div>
    </div>
    <img className="image my-auto" src={item.imgSrc} alt="fooditem" />
    <div></div>
  </li>
)
 
}

export default Fooditem
