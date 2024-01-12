import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { logoutUser } from "../../src/store/session";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const ProfileButton = ({currentUser}) => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false);
    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
    }


    return (
      <>
        <button onClick={() => setShowDropDown(!showDropDown)}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {showDropDown && (
          <ul className="profile-dropdown">
            <li>{currentUser.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </>
    );


};

export default ProfileButton;
