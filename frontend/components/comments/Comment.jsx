

const Comment = ({comment}) => {
  return (
    <div className="comment">
      <div className="user-bar">
        <img src={comment?.commenter} alt="" />
        <p>{comment?.username}</p>
        <p> {comment?.created_at}</p>  
      </div>
      <div className="body">
        <p>{comment?.body}</p>
      </div>
    </div>
  );
};

export default Comment
