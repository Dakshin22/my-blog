import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articles.find((article) => article.name === name);
  const otherArticles = articles.filter(article => article.name !== name);
  if (!article) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <h1>This is the {article.title} article</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
