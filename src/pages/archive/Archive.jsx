import React, { Component } from 'react';
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteService from '../../services/noteService';
const noteService = new NoteService();


export class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            archiveNoteArray: []
        }
    }

    componentDidMount() {
        this.archiveNote();
    }

    archiveNote=()=>{
        noteService.getArchiveNote()
        .then(res =>{
            console.log("datdatdat In")
            this.setState({
                archiveNoteArray:res.data.data.data
            })
            console.log("datdatdat out")
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render() {
        console.log("Archive")
        return (
            <div>
                Heelo
                <DisplayNote noteArr={this.state.archiveNoteArray} updateNote={this.archiveNote}/>
            </div>
        )
    }
}

export default Archive;
