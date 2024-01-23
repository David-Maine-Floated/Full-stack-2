import './displayUserBar.css'
import { readTime } from "../../helperMethods/readTime";


const DisplayUserBar = ({user, article}) => {

    const originalDate = new Date(article.createdAt);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    originalDate);
    const readingTime = readTime(article.body);

    return (
      <div className="userBar">
        <div className="left">
          <div className="userPhotoContainer">
            <img
              className="userPhoto"
              src={
                user.photoUrl ||
                "../../../default-user.jpg"
              }
              alt=""
            />
          </div>
          <div className="info">
            <div className="userName">{user.username}</div>
            <div className="readTime">
              <span>{readingTime} Minute read. </span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
}

export default DisplayUserBar