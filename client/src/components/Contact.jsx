import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
          <br />
          <br />
          <address>
            <div className="columns">
            <div className="column is-one-quarter">
            </div>
              <div className="column" id ="icon">
                <a href="mailto:hlowerthornhill@gmail.com">
                  <i class="far fa-envelope"></i>
                </a>
              </div>
              <div className="column" id ="icon">
                <a href="https://github.com/hughthorn">
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div className="column" id ="icon">
                <a href="https://resume.creddle.io/resume/5wwgbw1guaa">
                  <i class="far fa-file-alt"></i>
                </a>
              </div>
              <div className="column" id ="icon">
                <a href="https://www.linkedin.com/in/hughthornhill/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="column" id ="icon">
                <a href="https://twitter.com/hugh_thornhill">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
              <div className="column is-one-quarter">
              </div>
            </div>
          </address>
      </div>
    )
  }
}

export default Contact;
