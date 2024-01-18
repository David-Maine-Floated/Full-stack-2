
import {useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import './userProfileModal.css'

import ProfileModal from "../profileModal/ProfileModal";



const UserProfileModal = () => {

  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);


  if (!currentUser) return null;
  if (modal.type !== "userProfile") return null;
  return (
    <ProfileModal>
      {modal.type === "userProfile" && (
        <UserDropDown />
      )}
    </ProfileModal>
  );
};
export default UserProfileModal
