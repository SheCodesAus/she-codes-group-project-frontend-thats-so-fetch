import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ArticleCard.css";

// Do we want/need icons? It might not be neccesary here
// Components
// import InterestIcons from "../InterestIcons/InterestIcons";

// article card to display article image, title and owner

function ArticleCard(props) {
  const { articleData } = props;

  return (
    <div className="article-card">
      <Link to={`/articles/${articleData.id}`}>
        <img
          className="articleImg"
          src={articleData.image}
          alt={`${articleData.title}`}
        />
        <h3>{articleData.title}</h3>
        <h3 className="article-owner">{articleData.owner}</h3>
        <InterestIcons articleData={articleData} />
      </Link>
    </div>
  );
}

export default ArticleCard;
