import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import axios from 'axios'
import noteService from './services/notes'
import { ninvoke } from 'q'
import './index.css'


const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }
  
  useEffect(hook, [])

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  const rows = () => notesToShow.map(note => 
    <Note 
      key={note.id}
      note={note}
      toggleImportanceOf={() => toggleImportanceOf(note.id)}
    />
  )

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }

    noteService
    .create(noteObject)
    .then(initialNotes => {
      setNotes(notes.concat(initialNotes))
      setNewNote('')
    })
  }

  const toggleImportanceOf = id => {
    //console.log('importance of ${id} needs to be toggled')
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
    noteService
      .update(id, changedNote)
      .then(initialNotes => {
        setNotes(notes.map(note => note.id !== id ? note : initialNotes))
      }).catch(err => {
        setErrorMessage(
          `Note '${note.content}' was alredy removed from the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 500)
        setNotes(notes.filter(n => n.id !== id)); //remove an already deleted note from the app's state
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
      <Footer />
    </div>
  )
}
  
  export default App