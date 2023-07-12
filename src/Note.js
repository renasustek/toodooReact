import React from 'react';
import GetNotes from './GetNotes';

function Note() {
    const notes = GetNotes();
  
    if (!notes || notes.length === 0) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <div>{note.title}</div>
            <div>{note.content}</div>
          </div>
        ))}
      </div>
    );
  }

export default Note;