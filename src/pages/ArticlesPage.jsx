import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// Imports
import { Link } from "react-router-dom";

// Components
import ArticlesOwner from "../components/ArticlesOwner/ArticlesOwner";
import CommentUser from "../components/CommentUser/CommentUser"


function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState();
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
            setProjectData(data);
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
            <p className="">{projectData.title}</p> <div className="homepage-wrapper">
            <p className="">Was Written by: <ProjectOwner owner={projectData.owner} /> </p>
            <p className="">Date Created:{projectData.date_created} </p>
            
        </div>
        
    
   
        
        <div className="">
                <img className="" src={projectData.image} alt=""/>
                <br></br><br></br>
                <p className="">This is text to descripe the articles page. </p>
                <ul>
                    <div className="">
                    <p>{projectData.description}</p></div>
                    <div className="">
                    <div className="">
                    <p>Donation Goal: ${projectData.goal}</p></div>
                    <p>Pal Category: {projectData.category}</p></div>
                    
                </ul>
        </div>
        <br></br>
        
        <div>
            <p className="supportgiven">Support Given by Pals:</p>
            <p className="plain-text">Below is the support and messages received to get this pal ready to be put up for adoption. </p>
            <ul className="bulletpoint-text">
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <PledgeUser 
                        key={`pledge-${pledgeData.id}`} 
                        amount={pledgeData.amount} 
                        supporter={pledgeData.supporter} 
                        comment={pledgeData.comment} 
                    />

            
                );
            })}
            </ul>
        </div>
        
        
        </div>

     
        <div className="p-button-position">
        <div className="p-item">
        <button>
            <Link to={`/pledges/${id}`} className="p-item" >Support Pal Page</Link>
       </button>
      
        <button>
        <Link to={`/project/${projectData.id}/edit/`} className="p-item"> Edit Pal Page</Link>
       </button>
       </div>
       </div>
        
        
       
    </div>

    

    
    
    );
}

export default ProjectPage;