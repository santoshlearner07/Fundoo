import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
// import UserService from "../../services/userService";
import NoteService from "../../services/noteService";

import Icon from "../icons/Icon";
import '../takeANote/TakeANote.scss'

import IconButton from '@mui/material/IconButton';



const noteService = new NoteService();

export class TakeANote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            opeNote: true,
            title: '',
            description: '',
            color: '#ffffff',
            archive: false
        }
    }

    changeTakeOpen = () => {
        this.setState({
            opeNote: false
        })
    }

    changeColor =(val) =>{
        this.setState({
            color: val
        })
    }

    changeArchive =(val) =>{
        this.setState({
            archive: val
        })
    }

    changeTakeClose = () => {
        console.log("thisIsTakeANote");

        const formData = new FormData();
        formData.append("title",this.state.title)
        formData.append("description",this.state.description)
        formData.append("color",this.state.color)
        formData.append("isArchived",this.state.archive)

        noteService.addNote(formData)
            .then(res => {
                console.log(res)
            this.props.updateNote();
            this.props.updateDiplayNote();
            // this.props.changeColor();
                this.setState({
                    opeNote: true,
                    title: '',
                    description: '',
                    color : '#ffffff',
                    archive: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getNotesOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <div className="addnote-container">

                    {
                        this.state.opeNote ?
                            <div className="firstContainer" >
                                <input className="firstTitle" type="text" placeholder="Take a Note..." onClick={this.changeTakeOpen} />
                                <div className="firstTitleIcon">
                                    <IconButton> <CheckBoxOutlinedIcon /></IconButton>
                                    <IconButton> <BrushOutlinedIcon /></IconButton>
                                    <IconButton>  <PhotoOutlinedIcon /></IconButton>

                                </div>
                            </div>
                        :
                            <div className="secondContainer" style={{backgroundColor: this.state.color}}> 
                              
                                <input className="secondTitle" type="text" name="title" id="" placeholder="Title" onChange={(e) => this.getNotesOnChange(e)} />
                                <input className="secondDescription" type="text" name="description" id="" placeholder="Take a Note..." onChange={(e) => this.getNotesOnChange(e)} />
                                <div className="thirdPart">
                                    <div className="secondTitleIcon">

                                        <Icon changeColor = {this.changeColor} mode="create" changeArchive={this.changeArchive}/>
                                        
                                    </div>
                                    <button className="secondCButton" onClick={this.changeTakeClose}>Close</button>
                                    {/* <Button className="secondCButton" variant="text" onClick={this.changeTakeClose}>Close</Button> */}
                                </div>
                            </div>
                        }
                </div>
            </>
        )
    }
}

export default TakeANote