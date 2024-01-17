import { useDispatch, useSelector, } from 'react-redux';
import './profileModal.css'
import { useEffect, useState } from 'react';
import { hideModal } from '../../src/store/modals';


const ProfileModal = ({ children}) => {
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modal)


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