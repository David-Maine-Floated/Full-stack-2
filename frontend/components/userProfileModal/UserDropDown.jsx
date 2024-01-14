
import { useState } from "react";
import DropDownItem from "./DropDownItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines as solidFileLines } from "@fortawesome/free-solid-svg-icons";
import { faFileLines as regularFileLines } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare as penSolid} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as penRegular} from "@fortawesome/free-regular-svg-icons";
import { faUser as userReguler } from "@fortawesome/free-regular-svg-icons";
import { faUser as userSolid } from "@fortawesome/free-solid-svg-icons";
const UserDropDown = () => {

    const [selected, setSelected] = useState('');
  
    const handleClick = (arg) => {
        setSelected(arg)
    }


    return (
      <div className="profileContainer">
        <div
          className="profileItemOne"
          onClick={() => handleClick("profileItemOne")}
        >
          <DropDownItem
            icon={
              selected === "profileItemOne" ? (
                <FontAwesomeIcon icon={penSolid} />
              ) : (
                <FontAwesomeIcon icon={penRegular} />
              )
            }
            descriptor={"Write"}
          />
        </div>
        <div
          className="profileItemTwo"
          onClick={() => handleClick("profileItemTwo")}
        >
          <DropDownItem
            icon={
              selected === "profileItemTwo" ? (
                <FontAwesomeIcon icon={userSolid} />
              ) : (
                <FontAwesomeIcon icon={userReguler} />
              )
            }
            descriptor={"Write"}
          />
        </div>
        <div
          className="profileItemThree"
          onClick={() => handleClick("profileItemThree")}
        >
          <DropDownItem
            icon={
              selected === "profileItemThree" ? (
                <FontAwesomeIcon icon={solidFileLines} />
              ) : (
                <FontAwesomeIcon icon={regularFileLines} />
              )
            }
            descriptor={"Stories"}
          />
        </div>
      </div>
    );
}

export default UserDropDown