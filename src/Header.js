import React from 'react';

const Header = (props) => {
  return (
    <div >
      <header className="App-header">
          <a href='https://cyclokitty.github.io/' rel='noopener noreferrer' target='_blank' >
            <h4>Laura Veee</h4>
          </a>
          <h2>{props.title}</h2>
          <h4>Coding Blog of Joy</h4>
      </header>
    </div>
  );
}

export default Header;
