import {MdDeleteForever,MdFavorite,MdOutlineFavoriteBorder} from 'react-icons/md';
import { useState } from 'react';
import {BsFillStarFill,BsStar} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'


function Note({id,text,date,handleDeleteNote}){
          const [click,setClick]=useState(false);

          const handleClick =()=>setClick(!click);
          return(
                    <div className="note">
                              <span>{text}</span>
                             
                              <div className="note-footer">
                                        <strong>{date}</strong>
                                        <AiFillEdit size={25}/>
                                        <div className='star' onClick={handleClick}>
                                        {click ? (<BsFillStarFill size="25" style={{color:'black'}}/>):
                                        (<BsStar size={25} style={{color:"#000"}}/>)}
                                        </div>
                                        
                                        <MdDeleteForever className='delete-icon'size='1.9em' onClick={()=>handleDeleteNote(id)}/>
                                        
                              </div>
                    </div>
          )
}

export default Note;