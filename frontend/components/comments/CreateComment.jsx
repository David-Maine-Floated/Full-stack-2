import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../src/store/articles";
import { useParams } from "react-router-dom";
import "./comments.css";

const CreateComment = () => {
  const [body, setBody] = useState("");
  const [submitable, setSubmitable] = useState(false);
  const {articleId} = useParams();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session.currentUser.user);
  

  useEffect(() => {
    if(body !== '') {
        setSubmitable(true)
    } else {
        if(body === '') {
            setSubmitable(false)
        }
    }
  },[body])

  const handleSubmit = () => {
    if(submitable) {
      debugger
      dispatch(createComment({ comment: {body: body, commenter_id: user.id, article_id: articleId }}))
    }
  }

  return (
    <div className="create-comment">
      <div className="user-info">
        <img className="comment-photo" src={user?.photoUrl} alt="" />
        <div className="username">{user?.username}</div>
      </div>
      <textarea
        placeholder="What are you're thoughts?"
        className="comment-body"
        cols="35"
        rows="6"
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <div className="submit-container">
        <div className={`submit-button ${submitable && 'submitable'}`}>
          <p onClick={handleSubmit}>respond</p>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
