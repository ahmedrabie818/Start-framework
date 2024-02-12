import React from 'react'
import style from "./Portfolio.module.css"
import img1 from"../../assets/images/download.png"
import img2 from"../../assets/images/poert1.png"
import img3 from"../../assets/images/port2.png"
export default function Portfolio() {
  return <>
  <div className="potfolio vh-100 d-flex align-items-center justify-content-center flex-column">
  <h1 className='text-center fw-bold'> PORTFOLIO COMPONENT</h1>
  <div className='d-flex justify-content-center align-items-center my-3'>
  <div className="line bg-dark"></div> 
  <i className='fas fa-star mx-3 text-dark' ></i>
  <div className="line bg-dark"></div> 
   </div>
   <div className="container">
    <div className="row g-5">
    <div className="col-md-4 ">
        <div className="position-relative">
        <img src={img2} alt=""  className='w-100 rounded-3'/>
        <div className="layer position-absolute w-100 h-100  rounded-3 top-0 d-flex justify-content-center align-items-center text-light opacity-0"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
        </div>
      </div>
      


      <div className="col-md-4 ">
        <div className="position-relative">
        <img src={img3} alt=""  className='w-100 rounded-3'/>
        <div className="layer position-absolute w-100 h-100  rounded-3 top-0 d-flex justify-content-center align-items-center text-light opacity-0"><i className="text-white fa-solid fa-plus fa-6x"></i></div>

        </div>
      </div>

      <div className="col-md-4  position-relative">
        <div className="position-relative">
        <img src={img1} alt=""  className='w-100 rounded-3'/>
        <div className="layer position-absolute w-100 h-100  rounded-3 top-0 d-flex justify-content-center align-items-center text-light opacity-0"><i className="text-white fa-solid fa-plus fa-6x"></i></div>

        </div>
      </div>

      
    <div className="col-md-4 ">
        <div className="position-relative">
        <img src={img2} alt=""  className='w-100 rounded-3'/>
        <div className="layer position-absolute w-100 h-100  rounded-3 top-0 d-flex justify-content-center align-items-center text-light opacity-0"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
        </div>
      </div>
      


      <div className="col-md-4 ">
        <div className="position-relative">
        <img src={img3} alt=""  className='w-100 rounded-3'/>
        <div className="layer position-absolute w-100 h-100  rounded-3 top-0 d-flex justify-content-center align-items-center text-light opacity-0"><i className="text-white fa-solid fa-plus fa-6x"></i></div>

        </div>
      </div>

      <div className="col-md-4  position-relative">
        <div className="position-relative">
        <img src={img1} alt=""  className='w-100 rounded-3'/>
        <div className="layer position-absolute w-100 h-100  rounded-3 top-0 d-flex justify-content-center align-items-center text-light opacity-0"><i className="text-white fa-solid fa-plus fa-6x"></i></div>

        </div>
      </div>
      
    </div>
   </div>
  </div>
  </>
}
