import "./modal.css";

const WideModal = ({ children }) => {
  return (
    <div className="modal wide">
      <div className="modal-background"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default WideModal;
