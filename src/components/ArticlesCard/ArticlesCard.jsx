import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ArticlesCard.css";

function ArticlesCard(props) {const { articlesData } = props;
    return (
    <div className="articles-card">
        <Link to={`/articles/${articlesData.id}`}>
            <img src={articlesData.image}/>
            <h3>{articlesData.title}</h3>
        </Link>
    </div>
);
}

export default ArticlesCard;