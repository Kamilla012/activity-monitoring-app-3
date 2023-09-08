import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        emial: '',
        password: ''

    })
    const handleSubmit = (event) => {
        event.preventDefault()
    }
  return (
    <div className='flex justify-center items-center bg-lightBg '>
        <div className='bg-dimWhite px-3 py-6 rounded-md'>
            <h3 className=" text-violet-500 text-[30px]">Log-in</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3 flex flex-col'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' placeholder='Enter Email' className='rounded p-1'/>
                </div>


                <div className='mb-3 flex flex-col'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' placeholder='Enter Password'className='rounded p-1' />
                </div>


                <button type="submit" className='btn text-white px-2 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded w-[300px]'>Log in</button>
                <p>You are agree to our terms and policies</p>
                <Link to="/signup" className='btn w-[300px] bg-white text-violet-500 px-2 py-1 border-2 border-violet-500 rounded'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login