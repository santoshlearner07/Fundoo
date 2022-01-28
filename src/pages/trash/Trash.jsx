import React, { Component } from 'react';
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteService from "../../services/noteService";
const noteService = new NoteService();

export class Trash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArr: []
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
                    noteArr: res.data.data.data
                })
                console.log("datdatdat out")
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return <div>
            <DisplayNote noteArr={this.state.noteArr} updateTrashNote={this.updateTrashNote} />
        </div>;
    }
}

export default Trash;
