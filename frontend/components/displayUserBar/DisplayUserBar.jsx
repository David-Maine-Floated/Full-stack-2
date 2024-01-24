import './displayUserBar.css'
import { readTime } from "../../helperMethods/readTime";


const DisplayUserBar = ({article}) => {

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
                article.userPhotoUrl ||
                "../../../default-user.jpg"
              }
              alt=""
            />
          </div>
          <div className="info">
            <div className="userName">{article.username}</div>
            <div className="readTime">
              <span>{readingTime} min read . </span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
}

export default DisplayUserBar