import React, { useState, useEffect } from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpvoteSection from "../components/UpvoteSection";
import AddCommentForm from "../components/AddCommentForm";
const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articles.find((article) => article.name === name);
  const otherArticles = articles.filter((article) => article.name !== name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>This is the {article.title} article</h1>
      <UpvoteSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
