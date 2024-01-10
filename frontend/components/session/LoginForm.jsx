import { useState } from "react"
import { loginUser } from "../../src/store/session"
import { useDispatch } from "react-redux"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        const errors = dispatch(loginUser({username, password}))
            .catch((errors) => errors.json())
            .then(e => setErrors(e.errors))
    }

    return (
        <>
        <h1>Login In Betch!</h1>
        <h2>{errors}</h2>
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
        <label htmlFor="">Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
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