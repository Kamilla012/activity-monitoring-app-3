import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import styles from '../style'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''

    })
    const navigate = useNavigate()
    
    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                if(res.data === "Success"){
                navigate('/')
            }else{
                alert("No record existed")
            }
            })
            .catch(err => console.log(err))
        }

    }
  return (
    <div className={`${styles.sectionXY}flex justify-center items-center bg-lightBg`}>
        <div className='bg-dimWhite px-3 py-6 rounded-md'>
            <h3 className=" text-violet-500 text-[30px]">Log-in</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3 flex flex-col'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='rounded p-1'/>
                    {errors.email && <span className='text-errorColor'>{errors.email}</span>}
                </div>


                <div className='mb-3 flex flex-col'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='rounded p-1' />
                    {errors.password && <span className='text-errorColor'>{errors.password}</span>}
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