import { useDispatch, useSelector } from "react-redux";
import './commentsModal.css'
import { hideModal } from "../../src/store/modals";

const CommentsModal = ({ children }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const handleClick = (e) => {
    console.log('HI', e.target.className)
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
