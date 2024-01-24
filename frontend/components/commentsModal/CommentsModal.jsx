import { useDispatch, useSelector } from "react-redux";
import './commentsModal.css'
import { hideModal } from "../../src/store/modals";

const CommentsModal = ({ children }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  console.log('COMMENTS MODAL', children)
  const handleClick = (e) => {
    if (e.target.className === "commentsModal") {
      dispatch(hideModal());
    }
  };

  if(modal.type !== 'commentsModal') return null 

  return (
    
    <div className="commentsModal" onClick={(e) => handleClick(e)}>
      <div className="commentsContent">{children}</div>
    </div>
  );
};

export default CommentsModal;
