import React, {useEffect, useState} from "react"

import { Link } from "react-router-dom"
import OrientationImage from "../orientation.jpg"



const  HomePage = () => {
    const [postList, setPostList] = useState([])
    const [input, setInput] = useState('')


    const getPostList = async () => {
       await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json()
        })
        .then((data) => {
            setPostList(data)
        
        })
    }

    useEffect(() => {
        getPostList()
    }, [])

    return(
        <div>
           <div className="title-div">
                <p className="title-text">Search Articles</p>
            </div>
            <div className="div-search">
                <form>
                    <input 
                        value={input} 
                        data-testid="search-input" 
                        onChange={(e => setInput(e.target.value))} 
                        className="nosubmit" 
                        type="search" 
                        placeholder="Search Articles" 
                        required
                    />
                </form>
            </div>

            <div data-testid="card-posts" className="articles_card_group">
               {postList.map(post=> {
                if(input == "" || post.title.toLowerCase().includes(input.toLocaleLowerCase())){
                    return(
                        <div  className="article_card">
                        <div className="imgbox">
                            <img className="article_image" src={OrientationImage} alt=""/>
                        </div>
                        <div className="article_content">
                            <h3 className="article_name">{post.title}</h3>
                            <p className="article_description">
                                {post.body}
                            </p>
                            <Link to={`/posts/${post.id}/`} className="readmore_article">
                                <button role="button" className="readmore_button">Read more</button>
                            </Link>
                        </div>
                    </div>
                    )
                    }
               }
                        
            )}
                                    
                             
            </div>
            
        </div>
            
        
    )
    
}

export default HomePage