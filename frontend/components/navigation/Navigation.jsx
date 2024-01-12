// import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logoutUser } from "../../src/store/session";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        {currentUser && (
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        )}
        {currentUser && <li><ProfileButton /></li>}
      </ul>
      <Outlet />
    </>
  );
};

export default Navigation;
