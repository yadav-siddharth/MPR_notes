import React from 'react'
import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom'

import {useState} from 'react'
const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate();
    // const [user,setUser]=useState({
    //     name:"", password:""
    // });
    // let name,value;
    // const handleInputs=(e)=>{
    //     console.log(e);
    //     name=e.target.name;
    //     value=e.target.value;

    //     setUser({...user,[name]:value})
    // }

    const PostData=async (e)=>{
        e.preventDefault();

        // const{ name, password} = user;
        const res = await fetch('http://localhost:8888/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,password
            })
        }).then((res) => {return res.json()});
        const result = async () => {
            const data = await res;
            console.log(data);

            if(data.status === 422 || !data)
            {
                window.alert(data.message);
            }
            else{
                window.alert(data.message);
                navigate('/implement');
            }
            // navigate.push('/login');
    }
        result();
    }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img src='https://www.pngmagic.com/product_images/green-color-background.jpg' alt="" className='absolute w-full h-full object-cover mix-blend-lighten'/>
    <div className='flex justify-center items-center h-full bg-blend-overlay'>
        <form action="POST" className='max-w-[400px] w-full mx-auto bg-white p-8 text-black rounded-3xl'>
            <h2 className='text-4xl text-black font-bold text-center py-8'>NoteIn.Ai</h2>
            {/* <div className='flex justify-between mb-5'>
                <p className='border mx-auto shadow-lg hover:shadow-xl px-6 py-2 relative flex  items-center'>
                    <FcGoogle className='mr-2'/>Google
                </p>
            </div> */}
            <div className='flex flex-col mb-4'>
                <label >Username</label>
                <input type="text" value={name} className='border relative p-2 bg-gray-100' onChange = {(e) => setName(e.target.value)}/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input  value={password} className='border relative p-2 bg-gray-100' type="password" onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <button className='w-full py-3 mt-5  bg-indigo-600 hover:bg-indigo-500  relative text-white' onClick={PostData}>Login</button>
            <p className='relative top-3 left-16'>New Member?<button className='w-full left-2 bottom-6 relative text-indigo-600' onClick={()=>navigate('/signup')}>Sign Up</button></p>
            
        </form>
    </div>
    </div>
    
  )
}

export default Login

