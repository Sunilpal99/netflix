// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Card } from 'react-bootstrap';
import "../components/css/all.css"

const MoreReason = () => {
  return (
    <div style={{ background: '#000' }}>

        <div className="carausel pt-4">
        <h5 className='mb-2'>More reasons to join</h5>
        <div className="row">
          <div className="col-md-3">
            <Card className="custom-card h-100 " >
              <Card.Body>
                <Card.Title className='text-white'><h5>Enjoy on your TV</h5></Card.Title>
                <Card.Text className='mb-5' style={{color:'rgba(255, 255, 255, 0.7)'}} >
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                </Card.Text>
                <div className='text-end'>
                <Card.Img variant="top" src="../../src/assets/images/tv-removebg-preview.png" style={{width:'40%'}} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="custom-card h-100" >
              <Card.Body>
                <Card.Title className='text-white'><h5>Download your shows to watch offline </h5></Card.Title>
                <Card.Text className='mb-5' style={{color:'rgba(255, 255, 255, 0.7)'}}>
                  Save your favourites easily and always have something to watch.
                </Card.Text>
                <div className='text-end'>
                <Card.Img variant="top" src="../../src/assets/images/download-removebg-preview.png" style={{width:'40%'}} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="custom-card h-100" >
              <Card.Body>
                <Card.Title className='text-white'> <h5>Watch everywhere </h5></Card.Title>
                <Card.Text className='mb-5' style={{color:'rgba(255, 255, 255, 0.7)'}}>
                  Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
                </Card.Text>
                <div className='text-end'>
                <Card.Img variant="top" src="../../src/assets/images/hurray-removebg-preview.png" style={{width:'40%',marginTop: '26px'}} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="custom-card h-100" >
              <Card.Body>
                <Card.Title className='text-white'><h5>Create profiles for kids</h5></Card.Title>
                <Card.Text className='mb-5' style={{color:'rgba(255, 255, 255, 0.7)'}}>
                  Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
                </Card.Text>
                <div className='text-end'>
                  <Card.Img variant="top" src="../../src/assets/images/happyFace-removebg-preview.png" style={{width:'40%'}} />
                </div>              
                </Card.Body>
            </Card>
          </div>
        </div>
       
        </div>
    </div>
  )
}

export default MoreReason