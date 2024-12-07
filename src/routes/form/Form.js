
import React from 'react'
import './Form.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
function Form() {
 return (
  <div className='container'>
   <div className="form">
    <h2>Form</h2>
    <span className='icon1'><MdOutlineMailOutline /></span>
    <input className='inp' type="text" placeholder='Enter your email...' />
    <span className='icon2'><RiLockPasswordLine /></span>
    <input className='inp2' type="password" placeholder='Enter your password...' />

    <p className='for'><a href="">Forgot password? </a></p>

    <button>Login now</button>
    <p className='not'>Not anember?<a href="">Signup Now</a></p>

   </div>
  </div>

  
 )
}

export default Form