import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../components/NotesList';                   
import Translate from '../components/Translate';                    
import {MdOutlineTaskAlt,MdOutlineFeaturedPlayList} from 'react-icons/md';
import {BsTranslate} from 'react-icons/bs';
                                                                  
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
                    <div className='notes-container'>
                              <div className='container'>
                                        <div className='notes-head'>
                                                  <MdOutlineTaskAlt size="1.9rem"/>
                                                  <h2>My Notes</h2>
                                        </div>
                                                  <NotesList
                                                            notes={notes.filter((note) =>
                                                                      note.text.toLowerCase().includes(searchText)
                                                            )}
                                                            handleAddNote={addNote}
                                                            handleDeleteNote={deleteNote}
                                                  />
                                        
                              </div>
                              <div  className='right'>
                                        <div className='notes-head1'>
                                                  <MdOutlineFeaturedPlayList size="1.9rem"/>
                                                  <h2>Try Features</h2>
                                        </div>
                                        <Translate/>                                 </div> 
                    </div>       
                                       
                                 
                   
                    
                    
          </div>
          )
}

export default Implement;


