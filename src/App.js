import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.getYear = this.getYear.bind(this);
  }

  getYear() {
    let dt = new Date();
    return dt.getFullYear();
  }

  render() {
    let year = this.getYear();
    return (
      <div>
        <Header title={'First Post'} />
        <Blog />
        <Footer date={year} />
      </div>
    );
  }
}

export default App;
