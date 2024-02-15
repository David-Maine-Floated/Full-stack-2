import Comment from "./Comment";

const CommentIndex = ({ comments, articleId }) => {
  return (
    <div className="comment-index" key={articleId + "index"}>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentIndex;
