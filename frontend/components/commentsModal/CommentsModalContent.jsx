import CommentsModal from "./CommentsModal";
import "./commentsModal.css";


const CommentsModalContent = () => {
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);

  if (!currentUser.user) return null;
  if (modal.type !== "commentsModal") return null;
  return (
    <CommentsModal>
      <h1>SUPPPP</h1>
    </CommentsModal>
  );
};
export default CommentsModalContent;