import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { hideModal, showModal } from "../../src/store/modals";




const ProfileButton = ({currentUser}) => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false);
    const modal = useSelector(state => state.modal)
    useEffect(() => {
      if(modal.type === null) setShowDropDown(false)
    }, [modal]);

    const handleClick = () => {

      if (showDropDown) {
        setShowDropDown(false)
        dispatch(hideModal())
      } else {
        setShowDropDown(true);
        dispatch(showModal("userProfile"));
      }
    }

    return (
      <>
          <FontAwesomeIcon icon={faCircleUser} onClick={handleClick} className="userButton" />

      </>
    );


};

export default ProfileButton;
