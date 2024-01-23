import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, } from "react-router-dom"
import './articleDisplay.css'
import { getArticle } from "../../src/store/article"
import ButtonsBar from "../buttonsBar/ButtonsBar"
import { getUser } from "../../src/store/user"
import DisplayUserBar from "../displayUserBar/DisplayUserBar"
import { getClapsForArticle } from "../../src/store/claps"
import { readTime } from "../../helperMethods/readTime"

const ArticleDisplay = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  let article = useSelector((state) => state.articles[articleId]);
  let users = useSelector((state) => state.users);
  let user = article ? users[article.authorId] : null;
  let claps = useSelector((state) => state.claps);
  // WHY on refresh do I lose the user bar?
  console.log('CLAPS', claps)
  useEffect(() => {
    user = article ? users[article.authorId] : null;
  }, [article]);

  useEffect(() => {
    dispatch(getArticle(articleId))
  }, [dispatch]);

  useEffect(() => {
    if(article) {

      dispatch(getUser(article.authorId))
      dispatch(getClapsForArticle(article.id))
    }
  },[])



  const newArticleBody = (body) => {
    let sentences = body.split("\n");
    sentences = sentences.join("");
    sentences = sentences.split("\\n");
    return sentences.map((sentence) => {
      if (sentence !== "") {
        return (
          <p key={sentence.id} className="articleDisplayBody">
            {sentence}
          </p>
        );
      } else {
        return <br key={sentence.id}></br>;
      }
    });
  };

  return (
    <div className="articleDisplayContainer" key={articleId}>
      <div className="articleDisplayTitleDiv">
        <h1 className="articleDisplayTitle">{article && article.title}</h1>
      </div>
      {user && <DisplayUserBar key={user.id} user={user} article={article} />}
      {article && (
        <ButtonsBar key={article.id} article={article} claps={claps} />
      )}
      {article && (
        <div key={article && article.id + 2} className="article imageContainer">
          <img className="displayImage" src={article.photoUrl} alt="" />
        </div>
      )}
      <div key={article && article.id + 1} className="articleDisplayBodyDiv">
        {article && newArticleBody(article.body)}
      </div>
    </div>
  );
}

export default ArticleDisplay