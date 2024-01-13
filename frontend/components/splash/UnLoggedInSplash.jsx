import { Link } from "react-router-dom";
import './UnLoggedInSplash.css'
import { useDispatch } from "react-redux";
import { showModal } from "../../src/store/modals";
const UnLoggedInSplash = () => {
  const dispatch = useDispatch()

    return (
      <div className="splash">
        <h2>Stay curious.</h2>
        <h3>
          Discover stoires, thinking, and <br></br> expertiese from writers on
          any topic.
        </h3>
        <div className="startReadingButton">
          <Link
            className="startReadingLink"
            to="/"
            onClick={() => dispatch(showModal("signup"))}
          >
            Start Reading
          </Link>
        </div>
      </div>
    );
}

export default UnLoggedInSplash