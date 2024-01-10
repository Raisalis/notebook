// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
