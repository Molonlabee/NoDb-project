import React, { Component } from 'react';


class Main extends Component {
    constructor() {
        super();

        this.state = {
            newNotes:[],
            input:""
        };
        this.handleAddNote = this.handleAddNote.bind(this);
    }

    handleInputChange(value) {
        this.setState({input:value});
    }

    handleAddNote() {
        this.setState({
            newNotes: [...this.state.newNotes, this.state.input],
        });
    }

    render() {
        let newNotes = this.state.newNotes.map((element, index) => {
            return <newNotes key ={index} task ={element}/>
        })
        return (
            <div className='Main'>
               <h1>Take Your Notes</h1> 

                <div>
                    <textarea value={this.state.input}
                    placeholder= "notes"
                    onChange={e => this.handleInputChange(e.target.value)}/>
                    
                    <button onClick={this.handleAddNote}>addNote</button>
                    <button onClick={this.handleDeleteNote}>deleteNote</button>
                </div>
                {newNotes}
            
            </div>
        );
    }
}

export default Main;