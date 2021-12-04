import React from "react";
import {Row} from "react-bootstrap"
import Specials from "../Components/Specials";
import "./Home.css";
import specials from "./specials.json"
function Home() {
  return (
    <div className="home">
      <div className="intro">
        <section className="summary">
          <h1>Welcome to Food box</h1>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
      </div>
      <div className="container justify-content-center">
        <h2 className=" my-4">Today's specials</h2>
      </div>
      <Row className="justify-content-center"  style = {{maxWidth:"85vw",marginRight:"auto",marginLeft:"auto"}}>
        {specials.map(item => {
          return(<Specials key = {item.id} {...item} />)
        })}      
      </Row>   
    </div>
  );
}

export default Home;
