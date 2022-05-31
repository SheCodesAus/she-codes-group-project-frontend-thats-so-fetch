import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArticleForm(articleData) {
  const [article, postArticle] = useState(articleData.map);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    postArticle((prevArticleData) => ({
      ...prevArticleData,
      [id]: value,
    }));
  };

const handleSubmit = async (event) => {
      event.preventDefault();

      const token = window.localStorage.getItem("token");
      console.log("handleSubmit", project, token);

      if (
          token &&
          article.title &&
          article.pub_date &&
          article.content &&
          article.image &&
        //   article.category
      )
      try {
          const response = await fetch(`${process.env.RE_APP_API_URL}articles/`, {
              method: "post",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${token}`
              },
              body: JSON.stringigy({
                  title: article.title,
                  pub_date: new Date(article.pub_date).toISOString(),
                  content: article.content,
                  image: article.image,
              }),
          });
          const data = await response.json();
          console.log(data);
          navigate(`/articles/${data.id}`);
        } catch (err) {
            console.log(err);
        }
    };

    const  formFields = [
        {
            id: "title",
            label: "Title:",
            placeholder: "Article title",
            type: "text",
          },
          {
            id: "pub_date",
            label: "Date Published:",
            placeholder: "Date Published",
            type: "date",
          },
          {
            id: "content",
            label: "Content",
            placeholder: "Write your article",
            type: "text",
          },
          {
            id: "image",
            label: "Image:",
            placeholder: "Include Image",
            type: "url",
          },
        ];

        return (
            <form className="ArticleForm">
              <h3> Write an article </h3>
              {formFields.map((field, key) => {
                return (
                  <div className="row" key={`$key}-${field.id}`}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
              <button className="primary-button" type="submit" onClick={handleSubmit}>
                Post Article
              </button>
            </form>
          );
        }
        
        export default ArticleForm;

}
}
