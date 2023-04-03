import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
import {FaBars,FaTimes} from 'react-icons/fa'


function Navbar(){

          const [click,setClick]=useState(false);

          const handleClick =()=>setClick(!click);

          const [color,setColor] = useState(false);
          const changeColor =()=>{
                    if (window.scrollY >=100){
                              setColor(true);
                    }else{
                              setColor(false);
                    }
          };

          window.addEventListener("scroll",changeColor);

                   return (
                    <div className={'header header-bg'}>
                              <Link to='/'>Notein.AI</Link>
                              <ul className={click ? "nav-menu active " : "nav-menu"}>
                                        <li>
                                                  <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                                  <Link to='/notes'>Notes</Link>
                                        </li>
                                        <li>
                                                  <Link to='/implement'>Features</Link>
                                        </li>
                                        <li>
                                                  <Link to='/login' className=''>Login</Link>   
                                        </li>
                              </ul>
                              
                              <div className='hamburger' onClick={handleClick}>
                                        {click ? (<FaTimes size="20" style={{color:'#fff'}}/>):
                                        (<FaBars size={20} style={{color:"#000"}}/>)}
                              </div>
                    </div>
          )
}

export default Navbar;