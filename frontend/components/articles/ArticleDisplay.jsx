import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, } from "react-router-dom"
import './articleDisplay.css'
import { getArticle } from "../../src/store/article"
import { useState } from "react"

const ArticleDisplay = () => {
    const params = useParams();
    const articleId = params.articleId;
    const currentUser = useSelector((state) => state.session.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let article = useSelector((state) => state.articles[articleId])
    const [newBody, setNewBody] = useState('')
   
   //whyyyyyyyyyy
    useEffect(()=> {
        console.log('anything???')
        if(!currentUser) navigate("/");
    }, [currentUser, navigate])
    
    useEffect(() => {
        console.log("USEEFEECTTT");
        dispatch(getArticle(articleId))
        const newBody = newArticleBody()
        setNewBody(newBody)
    }, []);


    const newArticleBody = () => {
        let sentences = article.body.split('\n')
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
        <div className="articleDisplayBodyDiv">{article && newBody}</div>
        </div>
    );
}

export default ArticleDisplay