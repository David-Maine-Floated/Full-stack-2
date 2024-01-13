

const DropDownItem = ({icon, descriptor}) => {


    return (
      <div className="itemDiv">
        <div className="iconDiv">
          {icon}
        </div>
        <div className="descriptorDiv">
            <p>{descriptor}</p>
        </div>
      </div>
    );
}

export default DropDownItem