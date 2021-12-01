import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

//screens
import Home from "./Screens/Home"
import FooditemsList from "./Screens/FooditemsList"
import Cart from "./Screens/Cart"
import Login from "./Screens/Login"
import Signup from "./Screens/Signup"
import Checkout from "./Screens/Checkout/Checkout";
import AdminDashboard from "./Screens/Admin/AdminDashboard";
import PurchaseReport from "./Components/PurchaseReport";
import UserDashboard from "./Screens/User/UserDashboard";
import OrderSummary from "./Screens/OrderSummary";
import { useSelector } from "react-redux";
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
          <Route exact path="/admin">
            {user ?  <AdminDashboard />:<Redirect to ="/" />}
          </Route>
          <Route exact path="/user">
            {user ? <UserDashboard />:<Redirect to ="/" />}
          </Route>

          <Route exact path="/checkout" component={Checkout} />                  
          <Route exact path="/success" component={OrderSummary} />          
          <Route exact path ='/' component ={Home}/>
       </Switch>
     </main>
     <PurchaseReport/>
   </Router>
  );
}

export default App;
