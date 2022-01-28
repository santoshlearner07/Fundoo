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
        this.updateDiplayNote();
    }

    updateNote = () => {
        noteService.getNote()
            .then((res) => {
                this.setState({
                    noteArr: res.data.data.data
                })
                console.log(this.state.noteArr)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    updateDiplayNote=()=>{
        noteService.getNote()
        .then(res =>{
            console.log("datdatdat In")
            this.setState({
                noteArr:res.data.data.data
            })
            console.log("datdatdat out")
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="notesBox">
                    <TakeANote updateNote={this.updateNote} /> <br></br>
                    <DisplayNote noteArray={this.state.noteArr} updateDiplayNote={this.updateDiplayNote}/>
                </div>
            </div>
        )
    }
}
// useContext

export default Notes
