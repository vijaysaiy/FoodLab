import "./Cart.css";
import {Button} from "react-bootstrap"
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {getTotalPrice,getTotalQuantity} from '../redux/cartRedux'

function Cart() {
  const { products  } = useSelector((state) => state.cart);
  
  return (
    <div className="cart">
      
      <div className="cart-left">
        <div className="cart-left-upperrow">
          <h2>Shopping Cart</h2>
          <p>Subtotal</p>
        </div>
        {!getTotalQuantity(products) ? (
          <div className="cart-empty">
            <h3>Cart is Empty! </h3>
            <Link to="/fooditems/all">
              <Button variant = "outline-primary">Shop now</Button>
            </Link>
          </div>
        ) : (
          products.map((product) => {
            return <CartItem key = {product.id} {...product} />;
          })
        )}
      </div>
      

      <div className="cart-right">
        <div className="cart-info">
          <p>Total&nbsp;({getTotalQuantity(products)}) items</p>
          <p className = "total">₹{getTotalPrice(products)}</p>
        </div>
        <div className="d-grid gap-2">
          <Link to = {!getTotalQuantity(products)? "#" : "/checkout"}>
          <Button variant ="primary"   disabled = {!getTotalQuantity(products)}>Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
