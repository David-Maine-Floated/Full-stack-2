import CommentsModal from "./CommentsModal";
import "./commentsModal.css";
import { useSelector } from "react-redux";
import CommentIndex from "../comments/CommentsIndex";

// import CommentIndex from "../comments/CommentsIndex";
import CreateComment from "../comments/CreateComment";
import { useParams } from "react-router-dom";

const CommentsModalContent = () => {
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);
  const {articleId}= useParams()
  const comments = useSelector(state => state.articles[articleId]?.comments)
  const articles = useSelector(state => state.articles[articleId]?.comments)
  if (!currentUser.user) return null;
  if (modal.type !== "commentsModal") return null;

  return (
    <CommentsModal>
      <div className="responses-count">
        <h1 className="responses">{`Responses: (${articles.length})`}</h1>
      </div>
      <CreateComment />
      <CommentIndex comments={comments} articleId={articleId}/>
    </CommentsModal>
  );
};
export default CommentsModalContent;
