import StaffPickItem from "./StaffPickItem"
import { useSelector } from "react-redux";
import './staffPicks.css'
import { useEffect, useState } from "react";


const StaffPicks = () => {
    const articles = useSelector(state => state.articles)
    const [picks, setPicks] = useState([])

    
    useEffect(() => {
        if(articles) {
            let array = Object.values(articles)
            setPicks([array[1], array[2], array[5]]);
        }
    }, [articles])
    


    // const picks = [articles[1], articles[2], articles[5]]
    if (!picks[0]) return null
    return (
        <>
            <h1 className="staffPicksTitle">Staff Picks</h1>
            <div className="staffPicks">
                {picks.map(article => <StaffPickItem key={article.id} article={article}/>)}
            </div> 
        </>
    )
    
}

export default StaffPicks