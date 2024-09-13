// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../components/css/all.css"

const Footer = () => {
  return (
    
    <div style={{ background: '#000', }}>

      
      <footer className="py-5" >
        <div className="container text-white">
          <div className="row">
            <p>
              Questions? Call{' '}
              <a href="tel:000-800-919-1694" >
                000-800-919-1694
              </a>
            </p>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" >
                    FAQ
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Investor Relations
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Privacy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Speed Test
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" >
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Jobs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Cookies Preferences
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Legal Notices
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" >
                    Account
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Way to Watch
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Corporate Information
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Only on Netflix
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" >
                    Media Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Terms of Use
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown" style={{margin:'20px 0'}}>
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-language me-2"></i>
                English
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    हिन्दी
                  </a>
                </li>
              </ul>
            </div>
            <span>Netflix India</span>
          </div>
        </div>
      </footer>
      
    </div>




    
  );
}

export default Footer;
