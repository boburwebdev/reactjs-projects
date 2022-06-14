import React from 'react';
import NotesAppSidebar from './NotesAppSidebar';
import NotesAppEditor from './NotesAppEditor';
import Split from "react-split";
import {nanoid} from "nanoid";

import './NotesApp.scss';
import { useEffect } from 'react';

const NotesApp = () => {
  const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem('notes')) || []);
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  );

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])
  
  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "# Type your markdown note's title here"
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setCurrentNoteId(newNote.id)
  }
  
  function updateNote(text) {
    const newNotes = [];

    for (let i = 0; i < notes.length; i++) {
        if (currentNoteId === notes[i].id) {
            newNotes.unshift({...notes[i], body: text});
        } else {
            newNotes.push(notes[i]);
        }
    }

    setNotes(newNotes);
    
    // setNotes(oldNotes => oldNotes.map(oldNote => {
    //     return oldNote.id === currentNoteId
    //         ? { ...oldNote, body: text }
    //         : oldNote
    // }))
  }
  
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0 
        ?
        <Split 
            sizes={[30, 70]} 
            direction="horizontal" 
            className="split"
        >
            <NotesAppSidebar
                notes={notes}
                currentNote={findCurrentNote()}
                setCurrentNoteId={setCurrentNoteId}
                newNote={createNewNote}
            />
            {
                currentNoteId && 
                notes.length > 0 &&
                <NotesAppEditor 
                    currentNote={findCurrentNote()} 
                    updateNote={updateNote} 
                />
            }
        </Split>
        :
        <div className="no-notes">
            <h1>You have no notes</h1>
            <button 
                className="first-note" 
                onClick={createNewNote}
            >
                Create one now
            </button>
        </div>
      }
    </main>
  )
}

export default NotesApp