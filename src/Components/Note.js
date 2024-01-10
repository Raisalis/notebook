// src/components/Note.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Note = ({ note, onDelete }) => {
  return (
    <Card className="note" style={{width:'18rem'}}>
        <Card.Body>
            <Card.Text>
                {note}
            </Card.Text>
            <Button variant="danger" onClick={() => onDelete(note)}>Delete</Button>
        </Card.Body>
    </Card>
  );
};

export default Note;
