
import {useSelector} from 'react-redux'

const Home = () => {
    const currentUser = useSelector(state => state.session.currentUser)

    
    return (
        <>
        <h1>HOME!</h1>
        <p>Current User: {currentUser && currentUser.email}</p>
        </>
    )
}

export default Home