import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../src/store/article";
import IndexItem from "./indexItem";
import './articleIndex.css'
import { getUsers } from "../../src/store/user";

const ArticleIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const users = useSelector(state => state.users)
  // const [author, setAuthor] = useState('')
  useEffect( () => {
    dispatch(getArticles());
    dispatch(getUsers())
  }, [dispatch]);
  
  return (

    <div className="articleIndexContainer">
      {articles && Object.values(articles).map(article => {
        return <IndexItem key={article.id} article={article} author={users[article.authorId]} />;
      })}
    </div>
  );
};

export default ArticleIndex