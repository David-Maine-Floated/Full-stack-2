import { useEffect, useState } from "react";
import "./writeArticleForm.css";
import ProfileButton from "../navigation/ProfileButton";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editArticle } from "../../src/store/article";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getArticle } from "../../src/store/article";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submittable, setSubmittable] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);
  const errors = useSelector((state) => state.errors.articles);
  const navigate = useNavigate();
  const { articleId } = useParams();
 
  //why da heeeek
  const articles = useSelector(state => state.articles)
  const article = articles[articleId]


function replaceNewLines(text) {
  // Replace "/n" with an empty line
  text = text.replace(/\/n/g, "\n");

  // Replace "\\n" with an empty line
  text = text.replace(/\\n/g, "\n");

  return text;
}
  

  useEffect(() => {
    
    if (article) {
      setTitle(article.title);
      let newBody = replaceNewLines(article.body)
      setBody(newBody);
    }
  }, [article]);
  
  
  useEffect(() => {
    dispatch(getArticle(articleId));

  }, [articleId, dispatch])

  useEffect(() => {
    if (title !== "" && body !== "") {
      setSubmittable(true);
    } else {
      setSubmittable(false);
    }
  }, [title, body]);

  const handleSubmitMouseEnter = () => {
    if (!submittable) {
      setShowToolTip(true);
    }
  };

  const handleSubmitMouseLeave = () => {
    setShowToolTip(false);
  };

  const handleSubmit = async () => {
    let result = await dispatch(
      editArticle({ article: { title, body, author_id: currentUser.id, id: article.id } })
    );

    if (result) {
      navigate(`/article/${result}`);
    }
  };

  return (
    <div className="writeArticleContainer">
      <div className="articleHeader">
        <div className="articleHeaderLeft"></div>
        <div className="articleHeaderRight">
          <Link className="writeArticleHomeLink" to="/">
            Home
          </Link>
          <div className="publishButtonContainer">
            <div
              className={`publishButton ${submittable && "active"}`}
              onMouseEnter={handleSubmitMouseEnter}
              onMouseLeave={handleSubmitMouseLeave}
              onClick={submittable ? handleSubmit : null}
            >
              Publish
            </div>
          </div>
          <ProfileButton></ProfileButton>
        </div>
      </div>
      <div className="articleFormContainer">
        <div className={`tooltip ${showToolTip && "active"}`}>
          Please fill out article before submitting.
        </div>
        <div className="errors">{errors}</div>
        <textarea
          className="formTitleText"
          placeholder="Title"
          cols="39"
          rows="2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="formBodyText"
          placeholder="Tell your story..."
          cols="77"
          rows="15"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </div>
    </div>
  );
};

export default EditArticle;
