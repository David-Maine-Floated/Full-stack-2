import StaffPickItem from "./StaffPickItem"
import { useSelector } from "react-redux";
import './staffPicks.css'


const StaffPicks = () => {
    const articles = useSelector(state => Object.values(state.articles))

    // const threeArticles = () => {
    //     let tempArticles = articles
    //     let result = [];
    //     while (result.length < 3) {
    //         let randomInteger = Math.floor(Math.random() * tempArticles.length );
    //         let article = tempArticles.splice(randomInteger, 1)
    //         result.push(article[0])
    //     }
    //     return result 
    // }

    // const picks = threeArticles()

    const picks = [articles[1], articles[2]]

    // console.log('PICKS', picks)

    return (
        <>
            <h1 className="staffPicksTitle">Staff Picks</h1>
            <div className="staffPicks">
                {picks.map(article => <StaffPickItem article={article}/>)}
            </div> 
        </>
    )
    
}

export default StaffPicks