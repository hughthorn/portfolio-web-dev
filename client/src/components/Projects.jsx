import React, { Component } from 'react';
// import '../assests/travel-login-page.png';

class Projects extends Component {
  render() {
    return (
      <div>
      <h2>PROJECTS</h2>
        <h3>
          <a id="link" href="http://colossal-position.surge.sh/">Da-Folio</a>
        </h3>
        <p>Technologies use: React, Ruby-on-Rails, Bulma/CSS, Postgresql</p>
        <p>
          This was my final project while working at General Assembly.
          I created an web app where users can upload their own
          artwork via url. They can then add their own title and
          description for each piece, then add it to a formatted
          Portfolio page. The idea is to allow artists to create a
          digital portfolio on the fly if they have no experience in
          coding or how to use a site like Squarespace.
        </p>
        <div className="item">
          <img src="../assests/da-folio-front-page.png" />
        </div>
        <h3>
          <a id="link" href="https://travel-awesomely.herokuapp.com/login">Travel Awesomely!</a>
        </h3>
        <p>Technologies used: React, Node/express, Bluma/CSS, Postgresql</p>
        <p>
          This was a group project I created while working at General
          Assembly. My teammates and I built out a full CRUD app that
          utilizes the Triposo API to access information and pictures
          of popular tourist destinations all over the world. Users
          can login, comment on, and save their favorite places.
        </p>
        <div class="item">
          <img src="../assests/travel-login-page.png" />
        </div>
        <div class="item">
          <img src="../assests/travel-comment-page.png"/>
        </div>
          <h3>
            <a id="link" href="https://git.generalassemb.ly/pages/hughthorn/project-1-sci-fi-or-fantasy/">Adventurama!</a>
          </h3>
          <p>Technologies used: HTML, CSS, Javascript</p>
          <p>My first project working at General Assembly, was a text-based adventure game that utilizes basic front-end languages. The user can go on a branching
             story narrative of either a sci-fi or fantasy scenario.</p>
          <div class="item">
            <img src="../assests/landing-page.png" />
          </div>
          <div class="item">
            <img src="../assests/adventure-screen.png" />
          </div>
          <h3>
            <a id="link" href="https://hughthorn.github.io/colmaracademyhomepage/">Colmar Academy</a>
          </h3>
          <p>Technologies used: HTML, CSS</p>
          <p>My first capstone project from when I first started learning how to code at Codecademy. Utilizing flexbox, I was able to make a mock-up front page of
               a university called "Colmar Academy". This is when I first really started to gain an understanding of front-end development.</p>
            <div class="item">
              <img src="../assests/colmar-academy-1.png" />
            </div>
            <div class="item">
              <img src="../assests/colmar-academy-2.png" />
            </div>
        <br />
      </div>
    )
  }
}

export default Projects;
