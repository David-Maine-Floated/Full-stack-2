import { useSelector } from "react-redux"
import './staffPicksItem.css'
import { NavLink } from "react-router-dom"
const StaffPickItem = ({article}) => {
  // const navigate = useNavigate()

  //and why does this break it??

  
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   navigate(`article/${article.id}`);
  // }
  


    const author = article ? useSelector(state => state.users[article.authorId]) : null
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
            <NavLink className='NavLink'to={article && `article/${article.id}`}>
              <p>{author && author.username}</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            <p onClick={(e) => handleClick(e)}>{article && article.title}</p>
          </div>
        </div>
      </div>
    );
}


export default StaffPickItem