
import { useDispatch, useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import './userProfileModal.css'
import { hideModal } from "../../src/store/modals";
import ProfileModal from "../profileModal/ProfileModal";


const UserProfileModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);
  console.log(modal.type)


    if (!currentUser) return null;
    if (modal.type !== 'userProfile') return null;
  return (
    <ProfileModal>
      <button onClick={() => (dispatch(hideModal()))}>close</button>
      {modal.type === "userProfile" && <UserDropDown />}
    </ProfileModal>
  );
};
export default UserProfileModal
