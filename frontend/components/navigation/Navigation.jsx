// import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { NavLink, Outlet, Link } from "react-router-dom";
import { logoutUser } from "../../src/store/session";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton"
import './Navigation.css'
// import SessionModal from "../sessionModal/SessionModal";
import { hideModal, showModal } from "../../src/store/modals";
// import UserProfileModal from "../userProfileModal/userProfileModal";
import { faPenToSquare as penRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);
  //if logged in:

  const handleLogOut = () => {
    dispatch(hideModal())
    dispatch(logoutUser())
  }

  if (currentUser) return (
    <>
      <div className={`navbar ${currentUser && "loggedIn"}`}>
        <div className="leftside">SEARCH</div>
        <div className="rightside">
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <div className="navWriteDiv">
            <FontAwesomeIcon icon={penRegular} className="writeIcon"/>
            <NavLink to='write'className="NavLink">Write</NavLink>
          </div>
          <NavLink className="NavLink" onClick={handleLogOut}>
            Logout
          </NavLink>
          {currentUser && <ProfileButton currentUser={currentUser} />}
        </div>
      </div>
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
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink
            className="NavLink"
            to="/"
            onClick={() => dispatch(showModal("login"))}
          >
            Login
          </NavLink>
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
