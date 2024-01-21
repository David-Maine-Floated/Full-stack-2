import './displayUserBar.css'



const DisplayUserBar = ({user, article}) => {

    console.log(user)


    const originalDate = new Date(article.createdAt);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    originalDate
    );

    return (
      <div className="userBar">
        <div className="left">
          <div className="userPhotoContainer">
            <img className="userPhoto" src={user.photoUrl} alt="" />
          </div>
          <div className="info">
            <div className="userName">{user.username}</div>
            <div className="readTime">
              <span> 8 min read .  </span>
              <span>{formattedDate}</span>
            </div>

          </div>
        </div>
        <div className="right"></div>
      </div>
    );
}

export default DisplayUserBar