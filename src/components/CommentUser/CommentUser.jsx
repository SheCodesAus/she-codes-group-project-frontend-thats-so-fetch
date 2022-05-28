import React, { useState, useEffect } from "react";

function CommentUser({supporter, comment}) {
    // State
    const [supporterData, setSupporterData] = useState();

    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${supporter}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setSupporterData(data);
        });
    }, [supporter]);

 if (!supporterData) {
     return null
 }

    // Normal State
    return (
            <p id="comments">
                <br></br> Message to Fetch Mentor from {supporterData.username}: "{comment}"
            </p>
                
    );
}

export default CommentUser;