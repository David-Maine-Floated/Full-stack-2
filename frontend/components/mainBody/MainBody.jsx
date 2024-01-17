import ArticleIndex from "../articleIndex/articleIndex"
import SideBar from "../sideBar/SideBar"
import './mainBody.css'



const MainBody = () => {


    return (
      <div className="mainBodyDiv">
        <div className="mainBodyLeftDiv"></div>
        <ArticleIndex />
        <SideBar className='sideBar' />
      </div>
    );
}

export default MainBody