import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";



function ProjectForm(articlesData) {
  // State
  const [articles, postProject] = useState(
    articlesData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postProject((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", articles, token)
    
    // Is user logged in and have they put something in all fields?
    if (token && articles.title && articles.description && articles.goal && articles.image && articles.date_created && articles.category) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}articles/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
              title: articles.title, 
              description: articles.description,
              goal: parseInt(articles.goal),
              image: articles.image,
              is_open: articles.is_open === "on",
              date_created: new Date(articles.date_created).toISOString(),
              category: articles.category,
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/articles/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
       id: "title",
       label: "Name",
       placeholder: "Name of Pal",
       type: "text",
    },
    {
        id: "description",
        label: "Tell us about...",
        placeholder: "Description about Pal",
        type: "text",
    },
    {
        id: "goal",
        label: "Goal ",
        placeholder: "$ Money to help ",
        type: "text",
    },
    {
        id: "image",
        label: "Image",
        placeholder: "Enter image of Pal",
        type: "url",
    },
        {
       id: "is_open",
       label: "Tick if ready",
       placeholder: "Enter if articles open",
       type: "checkbox",
    },
    {
        id: "date_created",
        label: "Date Help Starts",
        placeholder: "Date Pal Needs Help From ",
        type: "date",
    },
    {
        id: "category",
        label: "Is Pal a cat or dog?",
        placeholder: "Enter word cat or dog",
        type: "text",
    },
   
]

    return ( 
      
    <div>
      <div id="welcome-text">    
          
      <div className="hero-image">
      <div className="hero-text">
        <h1>Upload a Pal</h1>
                      {/* <p>
                      <button className="cta"><Link  to="/projects/create/">SUPPORT A PAL</Link></button>
                      </p> */}
                      
        <h4>Help a Pal. Register them below for support.</h4> 
        
      </div>
  
      
      </div>
      </div>

      <div className="form">
          <form className="login-form">
            {formFields.map((field, key) => {
                return (
                  <div className="form-item">
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <div className="form-item">
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                </div>
                )
            })}
            <div className="form-item">
            <button className="button1" type="submit" onClick={handleSubmit}>
                Register A Pal
            </button>
            </div>

        </form>
        </div>
      </div>
        
    );
}

export default ProjectForm;