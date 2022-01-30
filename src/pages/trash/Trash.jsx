import React, { Component } from 'react';
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteService from "../../services/noteService";
const noteService = new NoteService();

export class Trash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trashNoteArray: []
        }
    }

    componentDidMount() {
        // this.updateNote();
        this.updateTrashNote();
    }

    updateTrashNote = () => {
        noteService.getTrashNote()
            .then(res => {
                console.log("datdatdat In")
                this.setState({
                    trashNoteArray: res.data.data.data
                })
                console.log("datdatdat out" + this.state.trashNoteArray)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        console.log("Trash Note")
        return <div>
            <DisplayNote noteArr={this.state.trashNoteArray} updateNote={this.updateTrashNote} />
        </div>;
    }
}

export default Trash;
