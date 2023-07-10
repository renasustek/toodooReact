import React, { useState } from 'react';

function InputNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitButton = (e) => {
    e.preventDefault();
    console.log("TILTE: " + title + " CONTENT: " + content);
  }
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div >
        <label htmlFor="content">Content</label>
        <input type="text" id="content" value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <button onClick={submitButton} type="submit">
        Submit
      </button>
    </form>
  );
}

export default InputNote;