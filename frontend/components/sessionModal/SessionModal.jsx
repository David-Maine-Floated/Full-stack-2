import { useDispatch, useSelector } from "react-redux"
import Modal from "../modals/modal"
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm'
import './sessionModal.css'

const SessionModal = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const currentUser = useSelector(state => state.session.currentUser)


    if(currentUser) return null
    if(!modal.type) return null

    return (
        <Modal>
            <div className="sessionModal">
                {modal.type === 'login' ? <LoginForm /> :<SignUpForm />}
            </div>
        </Modal>
    )
}

export default SessionModal