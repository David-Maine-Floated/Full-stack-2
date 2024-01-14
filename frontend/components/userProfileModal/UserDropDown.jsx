
import { useState } from "react";
import DropDownItem from "./DropDownItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines as solidFileLines } from "@fortawesome/free-solid-svg-icons";
import { faFileLines as regularFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as bookMarkSolid} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as bookMarkRegular} from "@fortawesome/free-regular-svg-icons";
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
                <FontAwesomeIcon icon={userSolid} />
              ) : (
                <FontAwesomeIcon icon={userReguler} />
              )
            }
            descriptor={"Profile"}
          />
        </div>
        <div
          className="profileItemTwo"
          onClick={() => handleClick("profileItemTwo")}
        >
          <DropDownItem
            icon={
              selected === "profileItemTwo" ? (
                <FontAwesomeIcon icon={bookMarkSolid} />
              ) : (
                <FontAwesomeIcon icon={bookMarkRegular} />
              )
            }
            descriptor={"Library"}
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