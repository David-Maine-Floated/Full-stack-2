import CommentsModal from "./CommentsModal";
import './commentsModalContent.css'


const CommentsModalContent = () => {
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);

  if (!currentUser) return null;
  if (modal.type !== "commentsModal") return null;
  return (
    <CommentsModal>
        <div className="commentsContainer">
          <h1>SUPPPP</h1>
        </div>
    </CommentsModal>
  );
};
export default CommentsModalContent;