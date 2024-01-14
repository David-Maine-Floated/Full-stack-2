import './profileModal.css'




const ProfileModal = ({ children }) => {

  console.log('whyyy')
  return (
    <div className="profileModal">
      {/* <div className="modal-background"></div> */}
      <div className="profileContent">{children}</div>
    </div>
  );
};

export default ProfileModal