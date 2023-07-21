import React,{useEffect,useState} from "react"
import OrientationImage from "../orientation.jpg";
import { useParams } from "react-router-dom";
import CommentComponent from "./CommentComponent";



const PostDetailComponent = () => {
    const [postDetail, setPostDetail] = useState([])
    const { id } = useParams();

  
    const getPostDetails = async (postId) => {
       await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(  response => {
            return response.json()
        })
        .then((data) => {
             setPostDetail(data)
        
        })
    }



    useEffect(() => {
        getPostDetails(id)
    }, [id])



    return (
       
            <div className="article_info">
                <img className="image-article" src={OrientationImage} alt=""/>   
                    <div className="article_detail_div">
                        <h1 className="article_title">{postDetail.title}</h1>
                        <p className="article_body">{postDetail.body}</p>
                    </div>          
               <CommentComponent  />

            </div>
    )
}
export default PostDetailComponent