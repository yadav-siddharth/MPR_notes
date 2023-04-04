import {MdDeleteForever,MdFavorite,MdOutlineFavoriteBorder} from 'react-icons/md';
import { useState } from 'react';
import {BsFillStarFill,BsStar} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'


function Note({id,note,text,date,handleDeleteNote,handleupdateText}){
          const [click,setClick]=useState(false);

          const handleClick =()=>setClick(!click);

          return(
                    <div className="note">
                              <span >{text}</span>
                             
                              <div className="note-footer">
                                        <strong>{date}</strong>
                                        <div className='star' onClick={handleClick}>
                                        {click ? (<BsFillStarFill size="25" style={{color:'#F7C04A'}}/>):
                                        (<BsStar size={25} style={{color:"#000"}}/>)}

                                        </div>
                                        
                                        <MdDeleteForever className='delete-icon'size='1.9em' style={{color:'#539165'}} onClick={()=>handleDeleteNote(id)}/>
                                        
                              </div>
                    </div>
          )
}

export default Note;



