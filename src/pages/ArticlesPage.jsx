import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// Imports
import { Link } from "react-router-dom";

// Components
import ProjectOwner from "../../components/ProjectOwner/ProjectOwner";
import PledgeUser from "../../components/Pledge/PledgeUser"

// const handleSubmit = async (event) => {"/project/:id/edit"}
import Palslogo from "../../pages/HomePage/images/logo.png"

function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState();
    const [isError] = useState(false);

    // Hooks
    const { id } = useParams();
    
    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            setProjectData(data);
          });
      }, [id]);


    // Loading State
    // "Skeleton" Loading
    if (!projectData) {
        return <p className="pcardtitle">Loading project Page...</p>;
    }

    if (isError) {
        return <p className="pcardtitle">Project Doesn't Exist...</p>;
    }

    // Normal State
    return (
     <div>
        <div>
            <p className="pcardtitle">{projectData.title}</p> <div className="homepage-wrapper">
            <p className="createdby">Was Nominated by: <ProjectOwner owner={projectData.owner} /> </p>
            <p className="createdby">Date Created:{projectData.date_created} </p>
            
        </div>
        
    
   
        
        <div className="project-details">
                <img className="project-page-img" src={projectData.image} alt="project img"/>
                <br></br><br></br>
                <p className="projectinfo">Every animal on this site is waiting to be someone’s Pal and every Pal deserves a home. All of our Pals are waiting at rescues and shelters, where they just need a little extra help from you before they can be placed up for adoption. </p>
                <ul>
                    <div className="yellowtext">
                    <p>{projectData.description}</p></div>
                    <div className="pal">
                    <div className="goal">
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