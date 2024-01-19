import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, } from "react-router-dom"
import './articleDisplay.css'
import { getArticle } from "../../src/store/article"
import ButtonsBar from "../buttonsBar/ButtonsBar"


const ArticleDisplay = () => {
    const {articleId} = useParams();
    const dispatch = useDispatch();
    let article = useSelector((state) => state.articles[articleId])
    useEffect(() => {
        dispatch(getArticle(articleId))
      }, [articleId, dispatch]);
      
    useEffect(() => {
      
    })
      
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
      
      
      console.log('ARTICLE SHOW PAGE', article)

    return (
      <div className="articleDisplayContainer" key={articleId}>
        <div className="articleDisplayTitleDiv">
          <h1 className="articleDisplayTitle">{article && article.title}</h1>
        </div>
        { article &&<div className="article imageContainer">
          <img className="image"src={article.photoUrl} alt="" />
        </div>} 
        {article && <ButtonsBar article={article} />}
        <div className="articleDisplayBodyDiv">
          {article && newArticleBody(article.body)}
        </div>
      </div>
    );
}

export default ArticleDisplay