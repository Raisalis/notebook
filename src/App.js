// src/App.js
import React, { useState } from 'react';
import './App.css';
import NoteList from './Components/NoteList.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter((note) => note !== noteToDelete);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>My Notebook</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App;

