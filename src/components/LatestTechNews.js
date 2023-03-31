import { useState, useEffect } from "react";
import axios from "axios"
import LatestTechNewsItem from "../components/LatestTechNewsItem";


const LatestTechNews = () => {
    const [ articles, setArticles ] = useState([])
    
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_APIKEY}`)
            console.log(response);
            setArticles(response.data.articles)
        
        }
        getArticles()
    }, [])

    return (
        <div>
            {articles.map(article => {
                return (
                    <LatestTechNewsItem title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        description={article.description}
                    />
                    )
            })}

        </div>
        )

}




export default LatestTechNews;