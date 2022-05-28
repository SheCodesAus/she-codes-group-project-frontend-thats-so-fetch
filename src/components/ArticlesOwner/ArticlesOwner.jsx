import React, { useState, useEffect } from "react";

function ArticlesOwner({owner}) {
    // State
    const [ownerData, setOwnerData] = useState();
    
    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${owner}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setOwnerData(data);
        });
    }, [owner]);

 if (!ownerData) {
     return null
 }

    // Normal State
    return (
        <span>{ownerData.username}</span>
            
    );
}

export default ArticlesOwner;