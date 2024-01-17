import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUpUser } from "../../src/store/session";
import "./form.css";
import { hideModal } from "../../src/store/modals";
import { loginUser } from "../../src/store/session";
import { showModal } from "../../src/store/modals";

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

  function handleDemoSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email: "Demo@hello.com", password: "password" }));
  }


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
          <input
            className="emailInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="passwordDiv">
          <input
            className="passwordInput"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submitDiv demo" onClick={(e) => handleSubmit(e)}>
          <p>Sign Up</p>
        </div>
        <div className="submitDiv demo" onClick={(e) => handleDemoSubmit(e)}>
          <p>Demo Sign In</p>
        </div>
        <div className="linkToOtherModal">
          <p className="toOtherModalLabel">Already a Member?</p>
          <p
            className="toOtherModalLink"
            onClick={() => dispatch(showModal("login"))}
          >
            Login
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
