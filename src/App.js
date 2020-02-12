import React, { Component } from 'react'
import axios from 'axios';
import './components/showCard/ShowCard';
import './App.css';
import ShowCard from './components/showCard/ShowCard';
import Header from './components/header/Header'
import { response } from 'express';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      shows: []

    }
    
  }

  componentDidMount() {  //lets get request invoke the website as soon as it is upload. This is for speed and priority.
    axios.get('/api/shows') //requesting data array from backend with axios.get request
    .then(response => {
      this.setState({shows: response.data})
    }) .catch(error =>{
      console.log(error);
    })
  }

  deleteShow = (id) => {
    axios.delete(`/api/shows/${id}`)
    .then(res =>{
      this.setState({shows: res.data})
    })
  }

  put
  editShow = (id) => {
    axios.put('/api/show/${id}')
    .then(res =>{
      this.setState({shows: res.data})
    })
  }
  
  //post
  postShow = (id) => {
    axios.post('/api/show')
    .then(res => {
      this.setState({shows: res.data})
    })
  }


  render() {
   const {shows} = this.state
   const mappedShows = shows.map((val,index) => {
     return (
      <div>
        <ShowCard show={val.show}
        favChar={val.favChar} 
        photoprop={val.img} 
        quote={val.quote}
        id={val.id}
        deleteShow={this.deleteShow}
        postShow={this.deleteShow}
        editShow={this.editShow}
        /> 
        the delete prop is being passed to ShowCard component, and passing its val to the button.
        The props name can be the same as there val.
      </div>
     )
     
   })
    return (
      <div className="App">
      <Header />
        {mappedShows}
      </div>
    )
  }
}

export default App;

