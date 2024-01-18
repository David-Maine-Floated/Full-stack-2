import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../src/store/article";
import IndexItem from "./indexItem";
import './articleIndex.css'

const ArticleIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles());
  }, []);



  return (
    <div className="articleIndexContainer">
      {Object.values(articles).map(article => <IndexItem article={article}/>)}
    </div>
  );
};

export default ArticleIndex;
