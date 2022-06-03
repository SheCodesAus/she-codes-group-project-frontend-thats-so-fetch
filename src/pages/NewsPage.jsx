import React, { useState, useEffect } from "react";

// Style
import "./NewsPage.css";

// Components
import ArticleCard from "../components/ArticleCard/ArticleCard";

function NewsPage() {
  // State
  const [newsList, setNewsList] = useState([]);

  //   Actions and Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}articles/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setNewsList(data);
      });
  }, []);

  return (
    <div>
      <h1>This is the News Page!</h1>

      <div id="news-list">
        {newsList.map((newsData, key) => {
          console.log(newsData);
          return (
            <ArticleCard key={`news-${newsData.id}`} newsData={newsData} />
          );
        })}
      </div>
    </div>
  );
}

export default NewsPage;
