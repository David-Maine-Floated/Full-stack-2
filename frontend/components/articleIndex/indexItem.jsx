import { readTime } from '../../helperMethods/readTime';
import './articleIndexItem.css'
import { useNavigate } from 'react-router-dom';

const IndexItem = ({article, author}) => {
  const navigate = useNavigate();

  const handleNavClick = (e) => {
    e.preventDefault();
    navigate(`article/${article.id}`)
  }

  const readingTime = readTime(article.body)
  const originalDate = new Date(article.createdAt);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    originalDate
  );
  

    return (
      <div className="indexItem">
        <div className="indexItemContainer">
          <div className="userBarIndex">
            <div className="userPhotoContainer">
              <img
                className="userPhoto"
                src={author && (author.photoUrl || '../../../default-user.jpg' )}
                alt=""
              />
            </div>
            <div className="indexItemAuthorNameDiv">
              <span className="indexItemAuthorName">
                {author && author.username}
              </span>
            </div>
            <div className="createdAt">
              <span>{".  " + formattedDate}</span>
            </div>
          </div>
          <div className="indexItemTitleDiv" onClick={handleNavClick}>
            <h2 className="indexItemTitle">{article.title}</h2>
          </div>
          <div className="indexItemBodyDiv" onClick={handleNavClick}>
            <p className="indexItemBody">
              {article.body.slice(0, 150) + "..."}
            </p>
          </div>
          <div className="indexItemFooter">
            <div className="indexItemFooterLeftDiv">
              <span className="indexItemFooterSpan">{`${readingTime}` + " Minute Read"} </span>
            </div>
            <div className="indexItemFooterRightDiv">
              <span className="indexItemFooterSpan">Save Icon</span>
            </div>
          </div>
        </div>
        <div className="index imageContainer">
          <img
            onClick={handleNavClick}
            className="indexImage"
            src={
              article.photoUrl ||
              "../../default-user.jpg"
            }
            alt=""
          />
        </div>
      </div>
    );
}


export default IndexItem