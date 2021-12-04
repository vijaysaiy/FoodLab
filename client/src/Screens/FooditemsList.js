import {React,useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "./Fooditems.css";
import Fooditems from "../Components/Fooditems";
function FooditemsList() {

  let { category,search } = useParams();
  const [searchList,setSearchList] = useState(false);
  let heading = category;
  
  if(category === "all"){
    heading = "Recommended"
  }
  useEffect(() => {
    const checkSearch = ()=>{
      if(search !== "undefined"){
        setSearchList(true)
      }else{
        setSearchList(false)
      }
    }
    checkSearch();
  }, [search])
  console.log(searchList)
  return (
    // <div className="container">
    //   <div className="left">
    <div className="container">
      <div className="col-lg-2 my-5 ">
        <h3>Categories</h3>
        <ul>
          <li>
            <Link to="/fooditems/starters">Starters</Link>
          </li>
          <li>
            <Link to="/fooditems/maincourse">Main Course</Link>
          </li>
          <li>
            <Link to="/fooditems/shawarmas">Shawarmas</Link>
          </li>
          <li>
            <Link to="/fooditems/kebabs">Kebab Specials</Link>
          </li>
          <li>
            <Link to="/fooditems/soups">Soups</Link>
          </li>
          <li>
            <Link to="/fooditems/desserts">Deserts</Link>
          </li>
        </ul>
      </div>
      <div className="divider me-4"></div>
      <div className="col-lg-8 my-5">
        <h3>{heading}</h3>
        <div className="card">
          <ul>
            <Fooditems category = {category} search = {search}/>           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooditemsList;
