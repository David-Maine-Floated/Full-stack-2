import ClapButton from "../articleButtons/ClapButton";
import ActiveClapButton from "../articleButtons/ActiveClapButton";
import './ButtonsBar.css'
import { useState } from "react";


const ButtonsBar = () => {
    const [clapActive, setClapActive] = useState(false)

    const handleClap = () => {
        console.log('yerrrr')
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
        <div className="articleButtonsRight"></div>
      </div>
    );
}

export default ButtonsBar