import {useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../src/store/modals";
import './deleteModal.css'
import WideModal from "../modals/WideModal";
import { deleteArticle } from "../../src/store/article";
import { useNavigate, useParams } from "react-router-dom";


const DeleteModal = () => {
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.session.currentUser);
  const {articleId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleDelete = async () => {
      let result = await dispatch(deleteArticle(articleId))
      dispatch(hideModal())
      if (!result) navigate('/')
     
  }


//   if (currentUser) return null;
  if (modal.type !== 'deleteModal') return null;

  return (
    <WideModal>
      <div className="deleteModal">
        <h1>DELETE STORY</h1>
        <h2>
          Deletion is not reversible, and the story will be completely deleted.
          If you do not want to delete, you can unlist the story.
        </h2>
        <div className="deleteButtons">
          <div
            className="getStartedButton"
            onClick={() => dispatch(hideModal())}
          >
            <p>Cancel </p>
          </div>
          <div
            className="getStartedButton delete"
            onClick={handleDelete}
          >
            <p>Delete</p>
          </div>

        </div>
      </div>
    </WideModal>
  );
};

export default DeleteModal;
