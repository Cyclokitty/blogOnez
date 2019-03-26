import React from 'react';

const Footer = (props) => {
  return (
    <div>
      <header className="App-footer">
          <h5>Contact me here: &nbsp;
            <a href='https://twitter.com/Cyclokitty' rel='noopener noreferrer' target='_blank'> <i class='fab fa-twitter'></i></a>
          </h5>

        <h5>created by Laura Veee ©{props.date}</h5>

      </header>
    </div>
  )
}

export default Footer;
