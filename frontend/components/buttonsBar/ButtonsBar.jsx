import ClapButton from "../articleButtons/ClapButton";
import ActiveClapButton from "../articleButtons/ActiveClapButton";
import './ButtonsBar.css'
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ButtonsBar = ({article}) => {
    const [clapActive, setClapActive] = useState(false)
    const currentUser = useSelector(state => state.session.currentUser)
    console.log("ARTICLE", article.authorId);
    console.log(currentUser)
    const handleClap = () => {
        setClapActive(true)
        setTimeout(() => {
            setClapActive(false);
        }, 2000)
        
    }

    return (
      <div className="articleButtons">
        <div className="aritcleButtonsLeft">
          <div className="button" onClick={() => handleClap()}>
            {clapActive ? <ActiveClapButton /> : <ClapButton />}
          </div>
          <span>100</span>
        </div>
        <div className="articleButtonsRight">
          {currentUser.id === article.authorId && (
            <div className="button">
              <NavLink className='NavLink'to={`/edit/${article.id}`}>Edit</NavLink>
            </div>
          )}
        </div>
      </div>
    );
}

export default ButtonsBar