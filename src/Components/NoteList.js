// src/components/NoteList.js
import React from 'react';
import Note from './Note';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NoteList = ({ notes, onDelete }) => {
  return (
    <Row className="gy-4 note-list">
      {notes.map((note, index) => (
        <Col className="col-3">
            <Note key={index} note={note} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  );
};

export default NoteList;
