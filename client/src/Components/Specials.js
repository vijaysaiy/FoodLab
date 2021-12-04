import React from 'react'
import {addToCart} from "../redux/cartRedux"
import {Button,Card} from 'react-bootstrap'
import { useDispatch } from "react-redux";
function Specials(item) {
    const dispatch = useDispatch() 
    function handleBuy(){
        dispatch(addToCart({...item,quantity:1}))
    }
    return (
     
<Card className="my-4" style={{ width: '18rem',marginLeft:"auto",marginRight:"auto" }}>
  <Card.Img variant="top" src={item.imgSrc} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
      ₹{item.price}
    </Card.Text>
    <Button variant="primary"  onClick={handleBuy}>Buy now</Button>
  </Card.Body>
</Card>

      //   <div className="home-info">
      //   <div className="cards">
      //     <div className="card-info">
      //       <h4>{item.name}</h4>
      //     </div>
      //     <div className="img">
      //       <img src={item.imgSrc} alt="specials"/>
      //     </div>
      //     <div className="price">
      //       ₹{item.price}
      //       <Button className="mx-4" onClick = {handleBuy}>Buy now</Button>
      //     </div>
      //   </div>
      // </div>
    )
}

export default Specials
