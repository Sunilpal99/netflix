/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import "../components/css/all.css"

const TrendingNow = () => {
  return (
    <div className="trendingNow pt-4">
      {/* Trending Now */}
      <div className="carausel">
        <h4>Trending Now</h4>
        <div className="buttons d-flex gap-2 flex-wrap mb-4">
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle"  type="button"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"  >
              India
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">India</a></li>
              <li><a className="dropdown-item" href="#">Global</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"   >
              Movies
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item" href="#">Movies</a></li>
              <li><a className="dropdown-item" href="#">TV Shows</a></li>
            </ul>
          </div>
        </div>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner  ">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center gap-4">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/src/assets/images/badboys.jpg" className="card-img-top" alt="Card 1" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/src/assets/images/kalki.jpg" className="card-img-top" alt="Card 2" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/src/assets/images/rebelredge.jpg" className="card-img-top" alt="Card 3" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/src/assets/images/deliverange.jpg" className="card-img-top" alt="Card 4" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                    <img src="/src/assets/images/buddy.jpg" className="card-img-top" alt="Card 5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="d-flex justify-content-center gap-4">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                  <img src="/src/assets/images/maharaja.jpg" className="card-img-top" alt="Card 6" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                  <img src="/src/assets/images/haseen.jpg" className="card-img-top" alt="Card 7" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                  <img src="/src/assets/images/indian.jpg" className="card-img-top" alt="Card 8" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                  <img src="/src/assets/images/meg.jpg" className="card-img-top" alt="Card 9" />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card" style={{ border: 'none' }}>
                  <img src="/src/assets/images/union.jpg" className="card-img-top" alt="Card 10" />
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          <button className="carousel-control-prev"type="button" data-bs-target="#carouselExample"data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next"  type="button" data-bs-target="#carouselExample"  data-bs-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* More reasons to join */}
      
    </div>
  );
};

export default TrendingNow;
