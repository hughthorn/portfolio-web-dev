import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
        <h3>Travel Awesomely!</h3>
        <p>Technologies used: React, Node/express, Bluma/CSS, Postgresql</p>
        <p>This was a group project I created while working in General Assembly. My teammates and I built out a full CRUD app that utilizes the Triposo API
           to access information and pictures of popular tourist destinations all over the world. Users can login, comment on, and save their favorite places.
        </p>
        <a id="link" href="https://travel-awesomely.herokuapp.com/login">Deployed App</a>
        <div class="item">
          <img src="../assests/travel-login-page" />
        </div>
        <div class="item">
          <img src="../assests/travel-comment-page"/>
        </div>
        <br />
      </div>
    )
  }
}

export default Projects;
