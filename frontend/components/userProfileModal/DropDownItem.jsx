

const DropDownItem = ({icon, descriptor}) => {


    return (
      <div className="itemDiv">
        <div className="iconDiv">
          {icon}
        </div>
        <div className="descriptorDiv">
            <p className="descriptor">{descriptor}</p>
        </div>
      </div>
    );
}

export default DropDownItem