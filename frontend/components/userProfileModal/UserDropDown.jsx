
import { useState } from "react";
import DropDownItem from "./DropDownItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines as solidFileLines } from "@fortawesome/free-solid-svg-icons";
import { faFileLines as regularFileLines } from "@fortawesome/free-regular-svg-icons";


const UserDropDown = () => {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected)
    }


    return (
      <div className="profileContainer" onClick={handleClick}>
        <div className="divOne">
          <h1>Yerrrrrrr</h1>
          <DropDownItem
            icon={
              selected ? (
                <FontAwesomeIcon icon={solidFileLines} />
              ) : (
                <FontAwesomeIcon icon={regularFileLines} />
              )
            }
            descriptor={"Hello"}
          />
        </div>
      </div>
    );
}

export default UserDropDown