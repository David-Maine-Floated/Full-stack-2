import "./comment.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../src/store/articles";

const Comment = ({ comment, articleId }) => {
  const originalDate = new Date(comment?.createdAt);
  const options = { year: "numeric", month: "short", day: "numeric" };
  if (comment) {
    var formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      originalDate
    );

  }

  const currentUserId = useSelector((state) => state.session.currentUser.user.id);
  const dispatch = useDispatch();
  console.log('COMMMNET', comment)

  return (
    <div className="comment">
      <div className="user-bar">
        <img src={comment?.photoUrl} alt="" />
        <div className="info">
          <p className="username">{comment?.username}</p>
          <p className="date"> {formattedDate}</p>
        </div>
      </div>
      <div className="body">
        <p>{comment?.body}</p>
      </div>
      <div className="delete-container">
        {comment?.commenterId === currentUserId && 
        <div>
          <p onClick={() => dispatch(deleteComment({comment, id: articleId }))}className="delete">Delete</p>
        </div>}
      </div>
    </div>
  );
};

export default Comment;
