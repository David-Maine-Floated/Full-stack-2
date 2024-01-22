import ClapButton from "../articleButtons/ClapButton";
import ActiveClapButton from "../articleButtons/ActiveClapButton";
import './ButtonsBar.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { hideModal, showModal } from "../../src/store/modals";

const ButtonsBar = ({article}) => {
    const [clapActive, setClapActive] = useState(false)
    const currentUser = useSelector(state => state.session.currentUser)
    const dispatch = useDispatch()


    const handleClap = () => {
        setClapActive(true)
        setTimeout(() => {
            setClapActive(false);
        }, 250)
        
    }

    if (!currentUser.user) return null

    return (
      <div className="articleButtons">
        <div className="aritcleButtonsLeft">
          <div className="button" onClick={() => handleClap()}>
            {clapActive ? <ActiveClapButton /> : <ClapButton />}
          </div>
          <span>100</span>
        </div>
        <div className="articleButtonsRight">
          {currentUser.user.id === article.authorId && (
            <>
              <div className="button">
                <NavLink className="NavLink" to={`/edit/${article && article.id}`}>
                  Edit
                </NavLink>
              </div>
              <div className="button">
                <span onClick={() => dispatch(showModal('deleteModal'))}>Delete Story</span>
              </div>
            </>
          )}
        </div>
      </div>
    );
}

export default ButtonsBar