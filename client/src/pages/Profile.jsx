import React from 'react'

const Profile = () => {
  return (
    <>
   
      <div class="container py-5">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">User</a></li>
                <li class="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" class="rounded-circle img-fluid" />
                <h5 class="my-3">John Smith</h5>
                <p class="text-muted mb-1">Full Stack Developer</p>
                <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div class="d-flex justify-content-center mb-2">
                  
                </div>
              </div>
            </div>
            <div class="card mb-4 mb-lg-0">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fas fa-globe fa-lg text-warning"></i>
                    <p class="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-github fa-lg"></i>
                    <p class="mb-0">mdbootstrap</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-twitter fa-lg"></i>
                    <p class="mb-0">@mdbootstrap</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-instagram fa-lg" ></i>
                    <p class="mb-0">mdbootstrap</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-facebook-f fa-lg"></i>
                    <p class="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr>
                <div class ="row">
                <div class ="col-sm-3">
                <p class ="mb-0">Email</p>
                </div>
                <div class ="col-sm-9">
                <p class ="text-muted mb-0">example @example.com</p>
                </div>
                </div>
                </hr>
                <div class ="row">
                <div class ="col-sm-3">
                <p class ="mb-0">Phone</p>
                </div>
                <div class ="col-sm-9">
                <p class ="text-muted mb-0">(097) 234-5678</p>
                </div>
                </div>
                <hr>
                <div class ="row">
                <div class ="col-sm-3">
                <p class ="mb-0">Mobile</p>
                </div>
                <div class ="col-sm-9">
                <p class ="text-muted mb-0">(098) 765-4321</p>
                </div>
                </div>
                </hr>
                <div class ="row">
                <div class ="col-sm-3">
                <p class ="mb-0">Address</p>
                </div>
                <div class ="col-sm-9">
                <p class ="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
                </div>
                </div>
                </div>
                <div class ="row">
                <div class ="col-md-6">
                <div class ="card mb-4 mb-md-0">
               
                
                
              
         
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
           
            </>
          )
}

          export default Profile