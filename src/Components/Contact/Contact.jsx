import React from 'react'
import style from "./Contact.module.css"
export default function Contact() {
  return <>
<div className="contact vh-100 ">
<h1 className='text-center fw-bold '> CONTACT COMPONENT</h1>
  <div className='d-flex justify-content-center align-items-center my-3'>
  <div className="line bg-dark"></div> 
  <i className='fas fa-star mx-3 text-dark' ></i>
  <div className="line bg-dark"></div> 
   </div>
   <div className="container">
   <form className='mx-auto my-5 w-50'>
    <input type="text" className='form-control mb-5' id='name' placeholder='User Name'/>
    <input type="text" className='form-control mb-5' id='name' placeholder='User Age'/>
    <input type="text" className='form-control mb-5' id='name' placeholder='User Email'/>
    <input type="text" className='form-control mb-5' id='name' placeholder='User Password'/>
   <button className='btn submit text-light'>Send Messsage</button>
   </form>
   </div>
</div>
  </>
}
