
import './modal.css'


const Modal = ({children}) => {

    return (
      <div className="Modal">
        <div className="modal-background">
        </div>
        <div className="modal-content">{children}</div>
      </div>
    );
}

export default Modal