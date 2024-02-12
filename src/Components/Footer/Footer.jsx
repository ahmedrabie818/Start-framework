import React from 'react'
import style from "./Footer.module.css"

export default function Footer() {
 return<>
 <div className="text-light">
    <div className={`${style.footer} row text-center g-0`}>
        <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <span> <i className={` ${style.icon} fa-brands fa-facebook mx-1`}></i></span>
            <span> <i className={` ${style.icon} fa-brands fa-twitter mx-1`}></i></span>
            <span> <i className={` ${style.icon} fa-brands fa-linkedin mx-1`}></i></span>
            <span> <i className={` ${style.icon} fa-solid fa-globe mx-1`}></i></span>
        </div>
        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use,<br/> licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    <div className={`${ style.endFooter} p-2 text-center`}>
        <p className='m-0 p-2'>Copyright © Your Website 2021</p>
    </div>
 </div>
 </>
}
