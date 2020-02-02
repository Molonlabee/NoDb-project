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
      newNotes:[]
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   app.use(express.json()).then(response => {
  //     this.setState({
  //       newNotes: response.data
  //     });
  //   });
  // }
  
  
  handleSubmit(event) {
    alert('New Note: ' + this.state.newNotes);
    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

        <Header />
        <Main />
        <Sidebar />
        <Footer />

        <button>Save</button>
        <button>Delete</button>
        <button>Edit</button>
  
      </form>
    );
  }
}

export default App;

////////push5///////