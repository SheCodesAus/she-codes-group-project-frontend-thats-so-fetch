import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// Imports
import { Link } from "react-router-dom";

// Components
import ArticlesOwner from "../components/ArticlesOwner/ArticlesOwner";
import CommentUser from "../components/CommentUser/CommentUser"


function ArticlesPage() {
    // State
    const [articlesData, setArticlesData] = useState();
    const [isError] = useState(false);

    // Hooks
    const { id } = useParams();
    
    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}articles/${id}`)
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            setArticlesData(data);
          });
      }, [id]);


    // Loading State
    // "Skeleton" Loading
    if (!articlesData) {
        return <p className="">Loading articles Page...</p>;
    }

    if (isError) {
        return <p className="">articles Doesn't Exist...</p>;
    }

    // Normal State
    return (
     <div>
        <div>
            <p className="">{articlesData.title}</p> <div className="homepage-wrapper">
            <p className="">Was Written by: <ArticlesOwner owner={articlesData.owner} /> </p>
            <p className="">Date Created:{articlesData.date_created} </p>
            
        </div>
        
    
   
        
        <div className="">
                <img className="" src={articlesData.image} alt=""/>
                <br></br><br></br>
                <p className="">This is text to descripe the articles page. </p>
                <ul>
                    <div className="">
                    <p>{articlesData.description}</p></div>
                    <div className="">
                    
                    </div>
                    
                </ul>
        </div>
        <br></br>
        
        <div>
            <p className="supportgiven">Support Given by Pals:</p>
            <p className="plain-text">Below is the support and messages received to get this pal ready to be put up for adoption. </p>
            <ul className="bulletpoint-text">
            {articlesData.comments.map((commentData, key) => {
                return (
                    <CommentUser 
                        key={`comment-${commentData.id}`} 
                        supporter={commentData.supporter} 
                        comment={commentData.comment} 
                    />

            
                );
            })}
            </ul>
        </div>
        
        
        </div>

     
        <div className="p-button-position">
        <div className="p-item">
        <button>
            <Link to={`/comments/${id}`} className="p-item" >Post Comments</Link>
       </button>
      
        <button>
        <Link to={`/articles/${articlesData.id}/edit/`} className="p-item"> Edit Page</Link>
       </button>
       </div>
       </div>
        
        
       
    </div>

    

    
    
    );
}

export default ArticlesPage;