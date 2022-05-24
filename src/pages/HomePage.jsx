import React, { useState, useEffect } from "react";

// Components
import ArticlesCard from "../components/ArticlesCard/ArticlesCard";

// Styles
import './HomePage.css';

// Imports
import { Link } from "react-router-dom";


function HomePage() {

    // States
    const [articlesList, setProjectList] = useState([]);

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}Articles`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (
        
        <div id="">    
          
    <div className="">
    <div className="">
      <h1>fetch</h1>
                    
                    
      
    </div>

    

    <div className="aboutus">
    <p>There are so many organizations and charities, people trying to encourage woman in technology, but there is not one place to go, where you can easily find a way to give back even if it is a little of your time. To make sure all the woman out there feel like they belong in this community.</p>
    </div>


    <div class="flex-parent jc-center">
    
    <button type="submit" class="home-button-right" ><Link  to="/articles/create/">Blog</Link></button>
    
    <button type="submit" class="home-button-left" ><Link  to="/articles/create/">Our People</Link></button>
   
    </div>
            
            
    <h2> Welcome our newest Role models</h2>      
            <div id="articles-list">
                {articlesList.map((articlesData, key) => {
                    return <ArticlesCard 
                        key={`articles-${articlesData.id}`} 
                        articlesData={articlesData}
                    />;
                })}
            </div>
           


        </div>
        <footer className="footerbottom">
            
            

        </footer>

        <footer className="footerbottom">
           
        </footer>

        
        </div>
    
    );
}

export default HomePage;