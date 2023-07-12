import React, { useState } from 'react';
import Note from './Note';
import axios from "axios";

export default function InputNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitButton = async (e) => {
    e.preventDefault();
    var postNote = {
      "title": title,
      "content": content
    };

    const post = await axios.post('http://localhost:7070/postNotes', postNote, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    setTitle("");
    setContent("");
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input type="text" id="content" value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button onClick={submitButton} type="submit">
          Submit
        </button>
      </form>
      <div>
        {/* {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))} */}
      </div>
    </div>
  );
}

