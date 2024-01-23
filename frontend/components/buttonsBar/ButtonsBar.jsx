import ClapButton from "../articleButtons/ClapButton";
import ActiveClapButton from "../articleButtons/ActiveClapButton";
import './ButtonsBar.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { hideModal, showModal } from "../../src/store/modals";
import { createClap } from "../../src/store/claps";

const ButtonsBar = ({article, claps}) => {
    const [clapActive, setClapActive] = useState(false)
    const [clapped, setClapped] = useState(false )
    const currentUser = useSelector(state => state.session.currentUser)
    const dispatch = useDispatch()
    const clapsArray = Object.values(claps)

    // const handleClap = () => {
    //     setClapActive(true)
    //     setTimeout(() => {
    //         setClapActive(false);
    //     }, 250) 
    // }
  
    const addClap = async () => {
      let result = await dispatch(createClap({article_id: article.id, liker_id: currentUser.user.id}))
      if(result) setClapped(true)
      
    }

    if (!currentUser.user) return null

    return (
      <div className="articleButtons">
        <div className="aritcleButtonsLeft">
          <div className="button" onClick={addClap}>
            {clapActive ? <ActiveClapButton /> : <ClapButton />}
          </div>
          <span>{clapsArray.length}</span>
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