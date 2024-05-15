import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./articleDisplay.css";
import { getArticle } from "../../src/store/articles";
import ButtonsBar from "../buttonsBar/ButtonsBar";
import DisplayUserBar from "../displayUserBar/DisplayUserBar";
import React from "react";


const ArticleDisplay = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  let article = useSelector((state) => state.articles[articleId]);
  // let claps = useSelector(state => state.articles[articleId])


  useEffect(() => {
    dispatch(getArticle(articleId));
  }, [dispatch, articleId]);

  console.log(articleId)

  const newArticleBody = (body) => {
    let sentences = body.split("\n");
    sentences = sentences.join("");
    sentences = sentences.split("\\n");
    return sentences.map((sentence) => {
      if (sentence !== "") {
        return (
          <p key={article.id + sentence} className="articleDisplayBody">
            {sentence}
          </p>
        );
      } else {
        return <br key={sentence.id + sentence}></br>;
      }
    });
  };

  return (
    <div className="articleDisplayContainer" key={articleId}>
      <div className="articleDisplayTitleDiv">
        <h1 className="articleDisplayTitle">{article && article.title}</h1>
      </div>
      {article && <DisplayUserBar article={article} />}
      {article && <ButtonsBar article={article} />}
      {article && (
        <div className="article imageContainer">
          <img className="displayImage" src={article.photoUrl} alt="" />
        </div>
      )}
      <div className="articleDisplayBodyDiv" >
        {article && newArticleBody(article.body)}
      </div>
    </div>
  );
};

export default ArticleDisplay;
