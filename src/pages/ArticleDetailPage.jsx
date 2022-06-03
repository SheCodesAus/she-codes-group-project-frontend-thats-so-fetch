import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ArticleForm from "../components/ArticleForm/ArticleForm";
// Styles
// import "./";

function ArticleDetailPage() {
  // States
  const [articleData, setArticleData] = useState([]);
  const { id } = useParams();

  // Actions
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}articles/${id}`)
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setArticleData(data);
      });
  }, [id]);

  return (
    <div>
      <div className="article-title">
        <h1>{articleData.title}</h1>
      </div>
      <div className="article-owner">
        <h2>
          {" "}
          Written by <br></br>
          {articleData.owner}
        </h2>
      </div>
      <div className="article-img">
        <img
          src={articleData.image}
          alt={`${articleData.title}'s article image`}
        />
        <div className="article-content">
          <h4>{articleData.content}</h4>
        </div>
        <div className="article-pub_date">
          <h4>{articleData.pub_date}</h4>
        </div>
        {articleData.id == window.localStorage.getItem("id") ? (
          <div className="edit-article">
            <ArticleForm />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ArticleDetailPage;
