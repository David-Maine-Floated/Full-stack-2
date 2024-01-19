



const DisplayUserBar = ({user}) => {

    console.log('HIIII',user)


    return ( 
        <div className="userBar">
            <div className="userPhoto">PHOTO</div>
            <div className="userName">
            {user.username}
            </div>
        </div>
    )
}

export default DisplayUserBar