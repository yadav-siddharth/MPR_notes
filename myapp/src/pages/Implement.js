import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../components/NotesList';                   
import Translate from '../components/Translate';                    
                                      
function Implement(){
          const [notes, setNotes] = useState(JSON.parse(
                              localStorage.getItem('notes-app')
          ),[

]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);


useEffect(() => {
          localStorage.setItem(
                    'notes-app',
                    JSON.stringify(notes)
          );
}, [notes]);

const addNote = (text) => {
          const date = new Date();
          const newNote = {
                    id: nanoid(),
                    text: text,
                    date: date.toLocaleDateString(),
          };
          const newNotes = [...notes, newNote];
          setNotes(newNotes);
};

const deleteNote = (id) => {
          const newNotes = notes.filter((note) => note.id !== id);
          setNotes(newNotes);
};

return (
          <div className={`${darkMode && 'dark-mode'}`}>
                    <Navbar/>
                    
                    <div className='container'>
                              <div className='left'>
                                        <NotesList
                                                  notes={notes.filter((note) =>
                                                            note.text.toLowerCase().includes(searchText)
                                                  )}
                                                  handleAddNote={addNote}
                                                  handleDeleteNote={deleteNote}
                                        />
                              </div> 

                              <div  className='right'>
                              <Translate/>   
                              </div>        
                                       
                                 
                    </div>
                    
                    
          </div>
          )
}

export default Implement;




