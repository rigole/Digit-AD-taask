import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
const CommentComponent = () => {

    const [commentsList, setCommentsList] = useState([])
    const { id } = useParams();
    const getCommentList = async (id) => {
        try{
           await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                setCommentsList(data)
            })
        } catch(error){
            console.log(error)
        }
       
    }


    useEffect(() => {
        getCommentList(id)
     
   }, [id])
   
    return (
        <>
         {commentsList.map(comment => {
            return (
                <div className="comments-card">
                    <div className="comments-div">
                        <p className="comments-body">
                            {comment.body}
                        </p>
                        <div className="author-div">
                            <span className="author-name">{comment.name}</span>
                            <span className="author-email">{comment.email}</span>
                        </div>
                    </div>
                </div>
            )
                  
                })}
               
        </>
    )
}

export default CommentComponent