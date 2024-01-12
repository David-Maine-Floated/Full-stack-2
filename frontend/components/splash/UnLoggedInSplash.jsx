import { Link } from "react-router-dom";
import './UnLoggedInSplash.css'
const UnLoggedInSplash = () => {


    return (
      <div className="splash">
        <h2 >Stay curious.</h2>
        <h3>
          Discover stoires, thinking, and <br></br> expertiese from writers on any topic.
        </h3>
        <div className="startReadingButton">
          <Link className="startReadingLink" to="signup">
            Start Reading
          </Link>
        </div>
      </div>
    );
}

export default UnLoggedInSplash