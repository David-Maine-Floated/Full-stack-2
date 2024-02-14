import CommentsModal from "./CommentsModal";
import "./commentsModal.css";
import { useSelector } from "react-redux";

// import CommentIndex from "../comments/CommentsIndex";
import CreateComment from "../comments/CreateComment";

const CommentsModalContent = () => {
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);

  if (!currentUser.user) return null;
  if (modal.type !== "commentsModal") return null;

  return (
    <CommentsModal>
      <div className="responses-count">
      <h1 className="responses">Responses: (100)</h1>

      </div>
      <CreateComment />
      {/* <CommentIndex comments={comments}/> */}
    </CommentsModal>
  );
};
export default CommentsModalContent;
