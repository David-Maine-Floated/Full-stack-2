import {useSelector } from "react-redux";
import Modal from "../modals/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./sessionModal.css";

const SessionModal = () => {
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);

  if (currentUser.user) return null;
  if (!modal.type) return null;

  return (
    <Modal>
      <div className="sessionModal">
        {modal.type === "login" && <LoginForm />}
        {modal.type === "signup" && <SignUpForm />}
      </div>
    </Modal>
  );
};

export default SessionModal;
