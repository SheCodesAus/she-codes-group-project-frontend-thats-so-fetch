import React, { useState, useEffect } from "react";

// Style
import "./NewsPage.css";

// Components
import ArticleCard from "../components/ArticleCard/ArticleCard";

function NewsPage() {
  // State
  const [articleList, setArticleList] = useState([]);

  //   Actions and Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}articles/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setArticleList(data);
      });
  }, []);

  return (
    <div>
      <h1>Fetch the latest News!</h1>

      <div id="article-list">
        {articleList.map((articleData, key) => {
          console.log(articleData);
          return (
            <ArticleCard
              key={`article-${articleData.id}`}
              articleData={articleData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewsPage;
