import React, { Component } from "react";
import DisplayNote from "../../components/displayNote/DisplayNote";
import TakeANote from "../../components/takeANote/TakeANote";
import NoteService from "../../services/noteService";
import '../notes/Notes.scss'

const noteService = new NoteService();

export class Notes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            noteArr: []
        }
    }

    componentDidMount() {
     this.updateNote();   
       
    }

    updateNote = () =>{
        noteService.getNote()
        .then((res) => {
            this.setState({
                noteArr: res.data.data.data
            })
            console.log(this.state.noteArr)
        })
        .catch((err) => {

        })
    }

    render() {
        return (
            <div>
                <div className="notesBox">
                    <TakeANote updateNote={this.updateNote}/> <br></br>
                    <DisplayNote noteArray={this.state.noteArr} />

                </div>
            </div>
        )
    }
}

export default Notes
