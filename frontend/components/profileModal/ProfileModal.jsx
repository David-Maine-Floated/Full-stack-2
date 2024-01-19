import { useDispatch} from 'react-redux';
import './profileModal.css'
import { hideModal } from '../../src/store/modals';

const ProfileModal = ({ children}) => {
  const dispatch = useDispatch()


  const handleClick = (e) => {
    if (e.target.className === 'profileModal') {
      dispatch(hideModal())
    }
  }

  return (

      <div className="profileModal" onClick={(e) => handleClick(e)}>
        <div className="profileContent">{children}</div>
      </div>

  );
};

export default ProfileModal