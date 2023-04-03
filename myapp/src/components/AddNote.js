import { useState,useEffect } from "react";
import { BsFilePlusFill, BsTranslate } from "react-icons/bs";
const axios = require('axios').default;


function AddNote({handleAddNote}){
          const [noteText, setNoteText]= useState([]);
          const charLimit = 200;
          const [options, setOptions] = useState([]);
          const [to, setTo] = useState('en');

          const handleChange = (event)=>{
                    if(charLimit-event.target.value.length>=0){
                              setNoteText(event.target.value);
                    }
          }

          const handleSaveClick =()=>{
                    if (noteText.trim().length>0){
                              handleAddNote(noteText);
                              setNoteText('');
                    }
                    
          }

          // useEffect(() => {
          //           axios.get('https://libretranslate.de/languages', {
          //               headers: { "accept": 'application/json' },
          //             })
          //             .then((res) => {
          //               console.log(res.data);
          //               setOptions(res.data);
          //             });
          // }, []);
                



          return (
                    <div className="note new">
                              <textarea rows='8' cols='10'
                               placeholder="Type a note ..."
                               onChange={handleChange} 
                               value={noteText}>
                              </textarea>
                              <div className="note-footer">
                                        <strong>{charLimit-noteText.length} Remaining</strong>
                                        <BsTranslate size="1.9rem"/>
                                        <BsFilePlusFill onClick={handleSaveClick} size='2.5em'/>
                              </div>

                    </div>
          )
}

export default AddNote;