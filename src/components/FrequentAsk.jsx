/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Accordion } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/css/all.css"

export const FrequentAsk = () => {
  return (
    <div style={{ background: '#000' }} className='pt-4'>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <h5 className='text-white mb-2'>Frequently Asked Questions</h5>

        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is Netflix?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <span>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</span>
            <br /><br />
            <span>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>How much does Netflix cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <span>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Where can I watch?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <span>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</span>
            <br /><br />
            <span>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>How do I cancel?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <span>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>What can I watch on Netflix?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <span>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h5>Is Netflix good for kids?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <span>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</span>
            <br /><br />
            <span>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>
          </Accordion.Body>
        </Accordion.Item>
      
       

       
        


      </Accordion>
      
      <div className="content text-center pt-4">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
            <input type="email" id="email" name="email" style={{  border: '1px solid #fff', color: '#fff', borderRadius: '5px' }} className="form-control w-50 w-md-50" placeholder="Email address" aria-describedby="basic-addon1" />
            <button type="button" className="btn btn-danger " style={{ background: '#e50914' }}>
              
              Get Started 
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 20 30"><path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" /></svg>
            </button>
          </div>
        </div>

      
    </div>
  );
};
