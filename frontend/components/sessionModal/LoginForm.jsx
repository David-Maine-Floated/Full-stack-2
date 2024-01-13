import { useState } from "react"
import { loginUser } from "../../src/store/session"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import './form.css'
import { hideModal } from "../../src/store/modals"

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
 
    if (sessionUser) return <Navigate to="/" replace={true} />;
   


    const close = (e) => {
      e.preventDefault();
      console.log("yooo");
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
          <h2 className="errors">{errors.toString()}</h2>
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
            <p>Sign In</p>
          </div>
        </form>
      </>
    );
}

export default LoginForm