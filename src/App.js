// src/App.js
import React, { useState } from 'react';
import NoteList from './Components/NoteList.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container className="App text-center">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>My Notebook</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Form className="center">
            <InputGroup className="mb-3" size="lg">
              <Form.Control type="text" placeholder="Add a note..." value={newNote} onChange={(e) => setNewNote(e.target.value)} />
              <Button variant="primary" onClick={handleAddNote}>Add</Button>
            </InputGroup>
          </Form>
          
        </Col>
      </Row>
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </Container>
  );
}

export default App;

