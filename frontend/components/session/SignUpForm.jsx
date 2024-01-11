import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { createUser } from "../../src/store/user";


const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(createUser({ email, password }));
    } catch {
      (errors) => errors.json().then((e) => setErrors(e.errors));
    }
  }
  console.log(sessionUser);
  if (sessionUser) return <Navigate to="/" replace={true} />;

  return (
    <>
      <h1>Sign Up!</h1>
      <h2>{errors}</h2>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default LoginForm;
