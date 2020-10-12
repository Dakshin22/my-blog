import React, { useState } from "react";
const AddCommentForm = () => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async ({articleName, setArticleInfo}) => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      //stringify converts object into JSON string, which is needed for the server
      body: JSON.stringify({
        username: username,
        text: commentText,
      }),
      headers: {
          'Content-Type': 'application/json',
      }
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        <textarea
          value={commentText}
          rows="4"
          cols="50"
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>

      <button onClick = {()=>addComment()}>Add Comment</button>
    </div>
  );
};
export default AddCommentForm;
