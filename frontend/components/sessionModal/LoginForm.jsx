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
        <div className="h1div">
          <h1>Welcome back.</h1>
        </div>
        <h2>{errors.toString()}</h2>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
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
          <div className="submitDiv">
            <input type="submit" value="submit" />
          </div>
        </form>
        <div className="closeDiv">
          {/* <button onClick={close}>Close</button> */}
          <div className="closeButton" onClick={close}>
            Close
          </div>
        </div>
      </>
    );
}

export default LoginForm