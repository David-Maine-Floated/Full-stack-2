import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { logoutUser } from "../../src/store/session";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { hideModal, showModal } from "../../src/store/modals";

const ProfileButton = ({currentUser}) => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false);



    const handleClick = () => {
      console.log('dropdown',showDropDown)
      setShowDropDown(!showDropDown)
      if (showDropDown) {
        dispatch(showModal("userProfile"));
      } else {
        dispatch(hideModal())
      }
    }

    return (
      <>
          <FontAwesomeIcon icon={faCircleUser} onClick={handleClick} className="userButton" />

      </>
    );


};

export default ProfileButton;
