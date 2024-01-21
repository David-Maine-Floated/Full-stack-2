import './displayUserBar.css'



const DisplayUserBar = ({user}) => {
    return ( 
        <div className="userBar">
            <div className="left">
                <div className="userPhotoContainer">
                    <img className='userPhoto'src={user.photoUrl} alt="" />
                </div>
                <div className="userName">
                {user.username}
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default DisplayUserBar