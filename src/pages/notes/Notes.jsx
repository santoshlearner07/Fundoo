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

    updateNote = () => {
        noteService.getNote()
            .then((res) => {
                let filterData = res.data.data.data.filter(x => x.isArchived !== true && x.isDeleted !== true)
                this.setState({
                    // noteArr: res.data.data.data
                    noteArr : filterData
                })
                console.log(this.state.noteArr)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log("new filter Data",this.state.noteArr)
        return (
            <div>
                <div className="notesBox">
                    <TakeANote updateNote={this.updateNote} /> <br></br>
                    <DisplayNote noteArray={this.state.noteArr} updateNote={this.updateNote}/>
                </div>
            </div>
        )
    }
}
// useContext

export default Notes
