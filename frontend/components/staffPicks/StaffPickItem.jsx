import { useSelector } from "react-redux"
import './staffPicksItem.css'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
const StaffPickItem = ({article}) => {
  const users = useSelector(state => state.users)
  const [author, setAuthor] = useState(null)

    // const author = article ? useSelector(state => state.users[article.authorId]) : null


    useEffect(() => {
      if(article) {
        setAuthor(users[article.authorId])
      }
    }, [article, users])

    return (
      <div className="staffPicksItem">
        <div className="top">
          <div className="userPhoto">
            <img
              src={
                author && `${author.photoUrl || "../../../default-user.jpg"}`
              }
              alt=""
            />
          </div>
          <div className="author">
            <NavLink
              className="NavLink"
              to={article && `article/${article.id}`}
            >
              <p>{author && author.username}</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom">
          <NavLink className="NavLink" to={article && `article/${article.id}`}>
            <p>{article && article.title}</p>
          </NavLink>
        </div>
      </div>
    );
}


export default StaffPickItem