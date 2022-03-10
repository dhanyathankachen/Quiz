import React from 'react';
import bg from '../Images/bg4.mp4';


function JoinScreen({start}) {
    return (

      //  <div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
      <>
      <video className='background-video' autoPlay loop muted>
      <source src={bg} type='video/mp4' />
      </video>
      
        <div className="join-screen">
            <h2>The 100% engagement platform</h2>
            <p>Online learning is rapidly becoming one of the most cost-effective ways to educate the world’s rapidly expanding workforce.</p>
            <button className="btn btn-primary glow-on-hover" onClick={start}>Start Now</button>
        </div>
        </>
    );
}

export default JoinScreen;