
import { useDispatch, useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import './userProfileModal.css'

import ProfileModal from "../profileModal/ProfileModal";



const UserProfileModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);
  // const [showDropDown, setShowDropDown] = useState(false);

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
