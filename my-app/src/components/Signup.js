import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Validation from './SignupValidation'

const Signup = () => {


        const [values, setValues] = useState({
            name: '', 
            emial: '',
            password: ''
    
        })
        const [errors, setErrors] = useState({})
    
        const handleInput = (event) =>{
            setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            setErrors(Validation(values))
    
        }




  return (
    <div className='flex justify-center items-center bg-lightBg '>
    <div className='bg-dimWhite px-3 py-6 rounded-md'>
    <h3 className=" text-violet-500 text-[30px]">Sign-up</h3>
        <form action='' onSubmit={handleSubmit}>
        <div className='mb-3 flex flex-col'>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Enter Email' className='rounded p-1' name='name' onChange={handleInput}/>
                {errors.name && <span className='text-errorColor'>{errors.name}</span>}
            </div>

            <div className='mb-3 flex flex-col'>
                <label htmlFor='email'>Email:</label>
                <input type='email' placeholder='Enter Email' className='rounded p-1'
                onChange={handleInput} name='email'/> 
                {errors.email && <span className='text-errorColor'>{errors.email}</span>}

            </div>


            <div className='mb-3 flex flex-col'>
                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='Enter Password'className='rounded p-1' onChange={handleInput} name='password'/>
                {errors.password && <span className='text-errorColor'>{errors.password}</span>}
            </div>


            <button type="submit" className='btn text-white px-2 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded w-[300px]'>Sign up</button>
            <p>You are agree to our terms and policies</p>
            <Link to="/" className='btn w-[300px] bg-white text-violet-500 px-2 py-1 border-2 border-violet-500 rounded'>Login</Link>
        </form>
    </div>
</div>
  )
}

export default Signup