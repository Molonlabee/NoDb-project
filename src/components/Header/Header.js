import React, { Component } from "react";



class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>Title</h1>

      <div>
        <input placeholder="Title"/>
        <input placeholder="Date"/>
      </div>

      </div>


    );
  }
}

export default Header;