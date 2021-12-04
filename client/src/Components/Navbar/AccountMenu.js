import {React,useState,useEffect} from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../redux/userRedux"
function AccountMenu() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [account,setAccount] = useState("");
  const [profile,setProfile] = useState("")

  useEffect(() => {
    const accountTitle = () => {
      if (user) {
        setAccount(user.username);
        user.email.includes("admin")  ? setProfile("admin"):setProfile("user")
      } else {
        setAccount("Account");
      }
    };
    accountTitle();
  }, [user]);
  if(user){
      return (
        <NavDropdown title={account} id="navbarScrollingDropdown" className="me-2">        
        <NavDropdown.Item as={Link} to= {`/${profile}`}>
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item  onClick={() =>dispatch(logout())} >
          Logout
        </NavDropdown.Item>      
      </NavDropdown>
      )
  } 
  else
  {
  return (
    <NavDropdown title={account} id="navbarScrollingDropdown" className="me-2">        
      <NavDropdown.Item as={Link} to="/signin">
        Sign in
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/register">
        Sign up
      </NavDropdown.Item>      
    </NavDropdown>
  );
}
}

export default AccountMenu;
