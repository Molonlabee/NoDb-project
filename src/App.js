import React, { Component } from 'react'
import axios from 'axios';
import './components/showCard/ShowCard';
import './App.css';
import ShowCard from './components/showCard/ShowCard';
import Header from './components/header/Header'

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
    }) 
  }


  deleteShow = (id) => {
    axios.delete(`/api/shows/${id}`)
    .then(res =>{
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
        deleteShow={this.deleteShow}
        /> 
        {/* the delete prop is being passed to ShowCard component, and passing its val to the button.
        The props name can be the same as there val. */}
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

//Last_push_2.6.20_1am//