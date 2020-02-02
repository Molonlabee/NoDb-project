import React, { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  render() {
    return (

      <div>
        <Header/>
        <Main />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
