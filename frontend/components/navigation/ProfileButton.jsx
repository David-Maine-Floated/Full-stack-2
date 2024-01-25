import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { hideModal, showModal } from "../../src/store/modals";




const ProfileButton = () => {
    // const dispatch = useDispatch()
    // const [showDropDown, setShowDropDown] = useState(false);
    // const modal = useSelector(state => state.modal)
    // useEffect(() => {
    //   if(modal.type === null) setShowDropDown(false)
    // }, [modal]);

    // const handleClick = () => {

    //   if (showDropDown) {
    //     setShowDropDown(false)
    //     dispatch(hideModal())
    //   } else {
    //     setShowDropDown(true);
    //     dispatch(showModal("userProfile"));
    //   }
    // }

    return (
      <>
          <FontAwesomeIcon icon={faCircleUser} className="userButton" />
      </>
    );


};

export default ProfileButton;
