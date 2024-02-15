import "./comment.css";

const Comment = ({ comment }) => {

  const originalDate = new Date(comment?.createdAt);
  const options = { year: "numeric", month: "short", day: "numeric" };
  if (comment) {
    var formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      originalDate
    );

  }


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
    </div>
  );
};

export default Comment;
