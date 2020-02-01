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
      currentView: "home"
    };
  }

  render() {
    let { currentView } = this.state;
    return (

      <section>
        <Header/>
        <Main />
        <Sidebar />
        <Footer />
        <button>click</button>
      </section>
    );
  }
}

export default App;
