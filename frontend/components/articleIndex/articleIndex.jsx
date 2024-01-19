import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../src/store/article";
import IndexItem from "./indexItem";
import './articleIndex.css'

const ArticleIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect( () => {
    dispatch(getArticles());

  }, [dispatch]);


  return (

    <div className="articleIndexContainer">
      {articles && Object.values(articles).map(article => {
        return <IndexItem key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticleIndex;
