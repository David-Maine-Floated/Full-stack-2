import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUpUser } from "../../src/store/session";
import "./form.css";
import { hideModal } from "../../src/store/modals";


const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sessionUser = useSelector(state => state.session.currentUser);
  const [errors, setErrors] = useState("");
  const [formattedErrors, setFormattedErrors] = useState();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUpUser({ email, password }, setErrors));

  }


  const close = (e) => {
    e.preventDefault();
    dispatch(hideModal());
  };

  useEffect(() => {
    console.log(errors)
    console.log(errors.errors)
  }, [errors])


  if (sessionUser) return <Navigate to="/" replace={true} />;

  return (
    <>
      <div className="closeDiv">
        <div className="closeButton" onClick={close}>
          <span>&#10005;</span>
        </div>
      </div>
      <div className="h1div">
        <h1>Join Medium.</h1>
      </div>
      <div className="errorDiv">
        {errors && (
          <h2 className="errors">
            {errors.map((error) => (
              <p>{error}</p>
            ))}
          </h2>
        )}
      </div>
      <form>
        <div className="emailDiv">
          <label htmlFor="">
            Email{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="passwordDiv">
          <label htmlFor="">
            Password{" "}
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="submitDiv" onClick={(e) => handleSubmit(e)}>
          <p>Sign Up</p>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
