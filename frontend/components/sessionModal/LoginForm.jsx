import { useState } from "react"
import { loginUser } from "../../src/store/session"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import './form.css'
import { hideModal, showModal } from "../../src/store/modals"

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState('')
    const sessionUser = useSelector(state => state.session.currentUser)
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(loginUser({email, password}, setErrors))
    }

    function handleDemoSubmit(e) {
      e.preventDefault()
      dispatch(loginUser({email: 'Demo@hello.com', password: 'password'}))
    }
 
    if (sessionUser.user) return <Navigate to="/" replace={true} />;
   


    const close = (e) => {
      e.preventDefault();
      dispatch(hideModal());
    };

    return (
      <>
        <div className="closeDiv">
          <div className="closeButton" onClick={close}>
            <span>&#10005;</span>
          </div>
        </div>
        <div className="h1div">
          <h1>Welcome back.</h1>
        </div>
        <div className="errorDiv">
          {errors && <h2 className="errors">{errors.toString()}</h2>}
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
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submitDiv demo" onClick={(e) => handleSubmit(e)}>
            <p>Sign In</p>
          </div>
          <div className="submitDiv demo" onClick={(e) => handleDemoSubmit(e)}>
            <p>Demo Sign In</p>
          </div>
          <div className="linkToOtherModal">
            <p className="toOtherModalLabel">No Account?</p>
            <p
              className="toOtherModalLink"
              onClick={() => dispatch(showModal("signup"))}
            >
              Create One
            </p>
          </div>
        </form>
      </>
    );
}

export default LoginForm