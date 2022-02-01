import { Title } from "@mui/icons-material";
import React, { Component } from "react";
import DisplayNote from "../../components/displayNote/DisplayNote";
import TakeANote from "../../components/takeANote/TakeANote";
import NoteService from "../../services/noteService";
import '../notes/Notes.scss'

const noteService = new NoteService();

const UserContext = React.createContext()
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

    // searchNotes = () =>{
    //     let filterData = noteArr.filter(value => value.isArchived !== true && value.isDeleted !== true)
    //         this.setState({
    //             noteArr : filterData
    //         })
    // }

    updateNote = () => {
        noteService.getNote()
            .then((res) => {
                let filterData = res.data.data.data.filter(value => value.isArchived !== true && value.isDeleted !== true)
                this.setState({
                    noteArr : filterData
                })
                console.log(this.state.noteArr)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log("In note")
        return (
            <div>
                <div className="notesBox">

{/* <UserContext.Provider value={{updateNote:{this.updateNote}}}> */}
                    <TakeANote updateNote={this.updateNote} /> <br></br>
                    <DisplayNote noteArray={this.state.noteArr} updateNote={this.updateNote}/>
                    {/* <TakeANote value /> <br></br> */}
                    {/* <DisplayNote noteArray={this.state.noteArr} value /> */}
                    {/* </UserContext.Provider> */}
                
                </div>
            </div>
        )
    }
}
// useContext

export default Notes
