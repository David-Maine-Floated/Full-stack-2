// import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logoutUser } from "../../src/store/session";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton"
import './Navigation.css'

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);
  return (
    <>
      <div className="navbar">
        <div className="leftside">SEARCH</div>
        <div className="rightside">

              <NavLink to="/signup">Sign Up</NavLink>
      
              <NavLink to="login">Login</NavLink>
       
            {currentUser && (
            
                <ProfileButton currentUser={currentUser} />
           
            )}
        
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
