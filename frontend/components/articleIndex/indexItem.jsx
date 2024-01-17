
import './articleIndexItem.css'
import { useNavigate } from 'react-router-dom';

const IndexItem = ({article}) => {
  const navigate = useNavigate();

  const handleNavClick = (e) => {
    e.preventDefault();
    navigate(`article/${article.id}`)
  }

    return (
      <div className="indexItemContainer">
        <div className="indexItemAuthorNameDiv">
          <span className="indexItemAuthorName">Author name</span>
        </div>
        <div className="indexItemTileDiv" onClick={handleNavClick}>
          <h2 className="indexItemTitle">{article.title}</h2>
        </div>
        <div className="indexItemBodyDiv" onClick={handleNavClick}>
          <p className="indexItemBody">{article.body.slice(0, 150) + "..."}</p>
        </div>
        <div className="indexItemFooter">
          <div className="indexItemFooterLeftDiv">
            <span>Topic</span>
            <span>8 Minute Read</span>
          </div>
          <div className="indexItemFooterRightDiv">
            <span>Save Icon</span>
          </div>
        </div>
      </div>
    );
}


export default IndexItem