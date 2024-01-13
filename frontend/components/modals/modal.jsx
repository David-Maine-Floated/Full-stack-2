
import './modals.css'


const Modal = ({children}) => {


    return (
      <div className="modal">
        <div className="modal-background">
        </div>
        <div className="modal-content">{children}</div>
      </div>
    );
}

export default Modal