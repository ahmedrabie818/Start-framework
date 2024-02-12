import React from 'react'
import style from "./Home.module.css"
import logo from "../../assets/images/avataaars.svg"
export default function Home() {
  return <>
  <div className=" d-flex flex-column align-items-center justify-content-center vh-100 home text-light">
  <img src={logo} className='w-25 mb-4'/>
  <h2>START FRAMEWORK</h2>
   <div className='d-flex justify-content-center align-items-center mb-3'>
  <div className="line bg-light"></div> 
  <i className='fas fa-star mx-3 text-light' ></i>
  <div className="line bg-light"></div> 
   </div>
   <p>Graphic Artist - Web Designer - Illustrator</p>

  </div>
  </>
}
