import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, } from "react-router-dom"
import './articleDisplay.css'
import { getArticle } from "../../src/store/article"
import ButtonsBar from "../buttonsBar/ButtonsBar"
import { getUser } from "../../src/store/user"
import DisplayUserBar from "../displayUserBar/DisplayUserBar"

const ArticleDisplay = () => {
    const {articleId} = useParams();
    const dispatch = useDispatch();
    let article = useSelector((state) => state.articles[articleId])
    let users = useSelector(state => state.users)
    const user = article ? users[article.authorId] : null;

    useEffect(() => {
        dispatch(getArticle(articleId))
      }, [articleId, dispatch]);
    
    // if (article) {
    //   dispatch(getUser(article.authorId));
    // }
    
    
    useEffect(() => {
      if(article) {
       dispatch(getUser(article.authorId))
      }
    },[article])
      


      const newArticleBody = (body) => {
        let sentences = body.split("\n")
        sentences = sentences.join('')
        sentences = sentences.split("\\n")
        return sentences.map(sentence => {
          if(sentence !== '') {
            return <p key={sentence.id} className="articleDisplayBody">{sentence}</p>;
          } else {
            return <br key={sentence.id}></br>
          }
        })
      }
      

    return (
      <div className="articleDisplayContainer" key={articleId}>
        <div className="articleDisplayTitleDiv">
          <h1 className="articleDisplayTitle">{article && article.title}</h1>
        </div>
        {user && <DisplayUserBar user={user}/>}
        {article && <ButtonsBar article={article} />}
        {article &&<div className="article imageContainer">
          <img className="displayImage"src={article.photoUrl} alt="" />
        </div>} 
        <div className="articleDisplayBodyDiv">
          {article && newArticleBody(article.body)}
        </div>
      </div>
    );
}

export default ArticleDisplay