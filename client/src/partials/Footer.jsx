import React from 'react';
import Contact from '../components/Contact';

function Footer(){
  return(
    <div>
      <footer>
        <Contact />
        <br />
        Made with React and Bulma
        <p>
          <i class="far fa-copyright"></i>2018 Hugh Thornhill
        </p>
        <br />
      </footer>
    </div>
  )
}

export default Footer;
