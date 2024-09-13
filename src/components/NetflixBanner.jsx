/* eslint-disable react/no-unescaped-entities */
// src/components/UpdateData.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";


import "../components/css/all.css"

import "bootstrap-icons/font/bootstrap-icons.css";



const NetflixBanner = () => {
  return (
      
      <div className="banner">
        <div className="logo d-flex align-items-center justify-content-between flex-wrap" style={{ width: '90%', margin: '0 auto' }}>
          <img
            className="icon"
            style={{ width: '10%' }}
            src="/src/assets/images/netlixlogo-removebg-preview.png"  alt="Netflix Logo"
          />
          <div className="buttons d-flex gap-2 flex-wrap">
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-language me-2"></i>
                English
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">हिन्दी</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-danger" style={{ background: '#e50914' }}>
              Sign In
            </button>
          </div>
        </div>
        <div className="content text-center">
          <h1 className="display-4" style={{ fontWeight: 600,width:'60%',margin:'0 auto' }}>Unlimited movies, TV shows and more</h1>
          <p className="lead" style={{ fontWeight: 600 }}>Starts at ₹149. Cancel anytime.</p>
          <p >Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
            <input type="email" id="email" name="email" style={{ border: '1px solid #fff', color: '#fff', borderRadius: '5px' }} className="form-control w-50 w-md-50" placeholder="Email address" aria-describedby="basic-addon1" />
            <button type="button" className="btn btn-danger " style={{ background: '#e50914' }}>
              
              Get Started 
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 20 30"><path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" /></svg>
            </button>
          </div>
        </div>
      </div>

     
  );
};

export default NetflixBanner;
