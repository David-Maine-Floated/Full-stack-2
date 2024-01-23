import { useSelector } from "react-redux"
import './staffPicksItem.css'

const StaffPickItem = ({article}) => {
    const author = article ? useSelector(state => state.users[article.authorId]) : null
    if(author) console.log('USER_IMAGE', author.photoUrl)
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
            <p>{author && author.username}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            <p>{article && article.title}</p>
          </div>
        </div>
      </div>
    );
}


export default StaffPickItem