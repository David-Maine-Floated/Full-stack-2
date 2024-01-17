import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, } from "react-router-dom"
import './articleDisplay.css'
import { getArticle } from "../../src/store/article"
import ClapButton from "../articleButtons/ClapButton"


const ArticleDisplay = () => {
    const params = useParams();
    const articleId = params.articleId;
    const currentUser = useSelector((state) => state.session.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let article = useSelector((state) => state.articles[articleId])
    
    useEffect(() => {
        dispatch(getArticle(articleId))
    }, [articleId]);
    

    const newArticleBody = (body) => {
        let sentences = body.split('\n')
        return sentences.map(sentence => {
            if(sentence !== '') {
                return <p className="articleDisplayBody">{sentence}</p>;
            } else {
                return <br></br>
            }
        })
    }


    return (
        <div className="articleDisplayContainer">
        <div className="articleDisplayTitleDiv">
            <h1 className="articleDisplayTitle">{article && article.title}</h1>
        </div>
        <div className="articleButtons">
            <div className="aritcleButtonsLeft">
                <ClapButton/>
                <span>100</span>
            </div>
            <div className="articleButtonsRight"></div>

        </div>
        <div className="articleDisplayBodyDiv">{article && newArticleBody(article.body)}</div>
        </div>
    );
}

export default ArticleDisplay