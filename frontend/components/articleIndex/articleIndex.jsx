import { useEffect, useState} from "react";
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
  
  // let author; 
  // if(users) {
  //   author = users[article.authorId]
  // }

  // console.log('AUTHOR', author)
  // const getAuthor = (article, author)=> {
  //   return users[article.authorId]
  // }
  return (

    <div className="articleIndexContainer">
      {articles && Object.values(articles).map(article => {
        console.log('ARTICLE IDNEX', article.authorId)
        console.log('USER IN INDEX', users[article.authorId - 1])
        return <IndexItem key={article.id} article={article} author={users[article.authorId]} />;
      })}
    </div>
  );
};

export default ArticleIndex