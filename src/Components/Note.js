// src/components/Note.js
import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <p>{note}</p>
      <button onClick={() => onDelete(note)}>Delete</button>
    </div>
  );
};

export default Note;
