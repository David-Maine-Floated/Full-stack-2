import { useDispatch } from 'react-redux';
import './modals.css'
import { hideModal } from '../../src/store/modals';

const Modal = ({children}) => {
    const dispatch = useDispatch();
     
    // const close = (e) => {
    //   e.preventDefault();
    //   console.log("yooo");
    //   dispatch(hideModal());
    // };


    return (
      <div className="modal">
        <div className="modal-background">
        </div>
        <div className="modal-content">{children}</div>
      </div>
    );

}

export default Modal