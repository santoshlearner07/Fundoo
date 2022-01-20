import React, { Component } from "react";
import DisplayNote from "../../components/displayNote/DisplayNote";
import TakeANote from "../../components/takeANote/TakeANote";
import NoteService from "../../services/noteService";
import '../notes/Notes.scss'


const noteService = new NoteService();


export class Notes extends Component {

    constructor(props){
        super(props)
        this.state = {
            noteArray :[]
        }
    }

    componentDidMount(){
        this.getAllNotes();
    }

        getAllNotes = () =>{
        noteService.getNote()
        .then((res)=>{
            this.setState({
                noteArray : res.data
            })
        })
        .catch((err)=>{

        })
    }

    render() {
        return (
            <div>
                <div className="notesBox">
                <TakeANote />                                                                                                                                                                     <br></br><br></br><br></br><br></br><br></br>
                <DisplayNote />
                {/* <TakeANote getAll = {this.getAllNotes}/>                                                                                                                                                       <br></br><br></br><br></br><br></br><br></br> */}
                {/* <DisplayNote noteArray={this.state.noteArray}/> */}

                </div>
            </div>
        )
    }
}

export default Notes
