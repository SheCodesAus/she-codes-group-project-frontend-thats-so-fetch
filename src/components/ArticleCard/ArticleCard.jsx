import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ArticleCard.css";

// Do we want/need icons? It might not be neccesary here. Maybe can create CategoriesIcons but I'm not sure how to do this
// Components
import InterestIcons from "../InterestIcons/InterestIcons";

// article card to display article image, title and owner
// if we aren't using the interests icons here we will need to fix line 27

function ArticleCard(props) {
  const { articleData } = props;
  // I've added a '?' in the Link after {articleData} this has solved the Type Error issue
  // I have just been playing around and it has seemed to work... Atleast get rid of the Type Error for 'id'
  // I'm going to go ahead and add the '?' to articleData.image, articleData.title & articleData.owner
  return (
    <div className="article-card">
      <Link to={`/articles/${articleData?.id}`}>
        <img
          className="articleImg"
          src={articleData?.image}
          alt={`${articleData?.title}`}
        />
        <h3>{articleData?.title}</h3>
        <h3 className="article-owner">{articleData?.owner}</h3>
        <InterestIcons articleData={articleData} />
      </Link>
    </div>
  );
}

export default ArticleCard;
