import { useDispatch, useSelector } from "react-redux"
import Modal from "../modals/modal"
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm'
import { hideModal } from "../../src/store/modals"
import './sessionModal.css'

const SessionModal = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const currentUser = useSelector(state => state.session.currentUser)

    const close = e => {
        e.preventDefault();
        console.log('yooo')
        dispatch(hideModal())
    }

    if(currentUser) return null
    if(!modal.type) return null

    return (
        <Modal>
            <div className="sessionModal">
                {modal.type === 'login' ? <LoginForm /> :<SignUpForm />}
                {/* <button onClick={close} >Close</button> */}
            </div>
        </Modal>
    )
}

export default SessionModal