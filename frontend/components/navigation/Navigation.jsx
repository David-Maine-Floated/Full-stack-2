// import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { NavLink, Outlet, Link } from "react-router-dom";
import { logoutUser } from "../../src/store/session";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton"
import './Navigation.css'
import SessionModal from "../sessionModal/SessionModal";
import { showModal } from "../../src/store/modals";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);
  //if logged in:
  if (currentUser) return (
    <>
      <div className="navbar">
        <div className="leftside">SEARCH</div>
        <div className="rightside">
          <NavLink className='home' to='/'>Home</NavLink>
          <NavLink to="/" >Sign Up</NavLink>
          <NavLink className="login" to="login">
            Login
          </NavLink>

          {currentUser && <ProfileButton currentUser={currentUser} />}
        </div>
      </div>
      <SessionModal />
      <Outlet />
    </>
  );
  // if not logged in:
  if (!currentUser) return (
    <>
      <div className="navbar">
        <div className="leftside">
          <p className="maineum">Maineum</p>
        </div>
        <div className="rightside">
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink
            className="login"
            to="/"
            onClick={() => dispatch(showModal("login"))}
          >
            Login
          </NavLink>
          {/* <Link to="/signup">Get Started</Link> */}
          <div className="getStartedButton">
            <Link
              className="getStartedLink"
              to="/"
              onClick={() => dispatch(showModal("signup"))}
            >
              Get Started
            </Link>
          </div>

          {currentUser && <ProfileButton currentUser={currentUser} />}
        </div>
      </div>
      <Outlet />
    </>
  );

};

export default Navigation;
