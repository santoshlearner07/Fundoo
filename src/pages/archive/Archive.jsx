import React, { Component } from 'react';
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteService from '../../services/noteService';
const noteService = new NoteService();


export class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArr: []
        }
    }

    componentDidMount() {
        // this.updateNote();
        this.archiveNote();
    }

    // updateNote = () => {
    //     noteService.getNote()
    //         .then((res) => {
    //             this.setState({
    //                 noteArr: res.data.data.data
    //             })
    //             console.log(this.state.noteArr)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    archiveNote=()=>{
        noteService.getArchiveNote()
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
                Hello
                {/* <DisplayNote noteArr={this.state.noteArr} archiveNote={this.archiveNote}/> */}
            </div>
        )
    }
}

export default Archive;
