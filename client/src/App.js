import Navbar from "./Components/Navbar/index.js"
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//screens
import Home from "./Screens/Home"
import FooditemsList from "./Screens/FooditemsList"
import Cart from "./Screens/Cart"
import Login from "./Screens/Login"
import Signup from "./Screens/Signup"
import Checkout from "./Screens/Checkout/index";
import AdminDashboard from "./Screens/Admin";
import UserDashboard from "./Screens/User/index";
import OrderSummary from "./Screens/OrderSummary";



function App() {
  const user = useSelector(state => state.user.currentUser)
   return (
   <Router>
     <Navbar />
     <main>
       <Switch>                 
         <Route exact path ="/fooditems/:category" component ={FooditemsList} />         
         <Route exact path ="/fooditems/search/:search" component ={FooditemsList} />         
          <Route exact path="/cart" component={Cart} />
          
          <Route exact path="/signin">
            {user ? <Redirect to ="/" /> : <Login />}
          </Route>
          <Route exact path="/register">
            {user ? <Redirect to ="/" /> : <Signup />}
          </Route>
          <Route exact path="/admin/">
            {user ?  <AdminDashboard /> : <Redirect to ="/" />}
          </Route>          
          <Route exact path="/user">
            {user ? <UserDashboard /> : <Redirect to ="/" />}            
          </Route>
          <Route exact path="/checkout">
            {user ? <Checkout /> : <Redirect to ="/signin" />}            
          </Route>

          <Route exact path="/success" component={OrderSummary} />          
          <Route exact path ='/' component ={Home}/>
       </Switch>
     </main>    
   </Router>
  );
}

export default App;
