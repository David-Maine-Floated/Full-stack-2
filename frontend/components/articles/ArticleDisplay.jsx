import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./articleDisplay.css";
import { getArticle } from "../../src/store/articles";
import ButtonsBar from "../buttonsBar/ButtonsBar";
import DisplayUserBar from "../displayUserBar/DisplayUserBar";
import { getClapsForArticle } from "../../src/store/claps";

const ArticleDisplay = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  let article = useSelector((state) => state.articles[articleId]);
  let claps = useSelector(state => state.articles[articleId])

  
  console.log('ARTICLE',article, 'claps', claps)
  console.log('RE-RENDER???')


  useEffect(() => {
    dispatch(getArticle(articleId));
  }, [dispatch, articleId]);



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
      {article && <DisplayUserBar article={article} />}
      {article && <ButtonsBar article={article} />}
      {article && (
        <div className="article imageContainer">
          <img className="displayImage" src={article.photoUrl} alt="" />
        </div>
      )}
      <div className="articleDisplayBodyDiv">
        {article && newArticleBody(article.body)}
      </div>
    </div>
  );
};

export default ArticleDisplay;
