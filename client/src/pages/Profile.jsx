import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <>
      
        <div class="card">
          <img className="profile-pic" src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="John"/>
          <h1>John Doe</h1>
          <p class ="title">CEO Founder, Example</p>
        <p>Harvard University</p>
        <div className="contact-icons">
          <a className="profile-dec" href="#"><i class ="fa fa-dribbble"></i></a>
          <a className="profile-dec" href="#"><i class ="fa fa-twitter"></i></a>
          <a className="profile-dec" href="#"><i class ="fa fa-linkedin"></i></a>
          <a className="profile-dec" href="#"><i class ="fa fa-facebook"></i></a>
        </div>
          <p><button className="contact-button">Contact</button></p>
        </div>
      
      </>
      )
}

      export default Profile