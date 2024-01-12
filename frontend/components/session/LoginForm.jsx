import { useState } from "react"
import { loginUser } from "../../src/store/session"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import './LoginForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState('')
    const sessionUser = useSelector(state => state.session.currentUser)
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        try {

            let error = dispatch(loginUser({email, password}))
            //I tried to return a custom error message if loginUser fails. 
            //aint workin. I'd rather the try catch statements work anyways.
            // console.log(error)
            // if(error) setErrors(error)
            }
            catch  {
                (errors) => errors.json()
                .then((e) => setErrors(e.errors));
            }
            
    }
 
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setErrors([]);
    //   return dispatch(loginUser({ email, password })).catch(
    //     async (res) => {
    //       let data;
    //       try {
    //         // .clone() essentially allows you to read the response body twice
    //         data = await res.clone().json();
    //       } catch {
    //         data = await res.text(); // Will hit this case if the server is down
    //       }
    //       if (data?.errors) setErrors(data.errors);
    //       else if (data) setErrors([data]);
    //       else setErrors([res.statusText]);
    //     }
    //   );
    // };








    if (sessionUser) return <Navigate to="/" replace={true} />;


    return (
        <>
        <h1>Login In Betch!</h1>
        <h2>{errors}</h2>
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
        <label htmlFor="">Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor="">Password:
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="submit"/>
        </form>
        </>
    )
}

export default LoginForm