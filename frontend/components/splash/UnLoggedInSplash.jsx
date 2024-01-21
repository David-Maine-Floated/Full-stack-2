import { Link } from "react-router-dom";
import "./UnLoggedInSplash.css";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../src/store/modals";
const UnLoggedInSplash = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);

  if (currentUser.user) return null;

  return (
    <>
      <div className="splash">
        <h2>Stay curious.</h2>
        <h3>
          Discover stoires, thinking, and <br></br> expertiese from writers on
          any topic.
        </h3>
        <div
          className="startReadingButton"
          onClick={() => dispatch(showModal("signup"))}
        >
          <Link className="startReadingLink" to="/">
            Start Reading
          </Link>
        </div>
      </div>
    </>
  );
};

export default UnLoggedInSplash;
