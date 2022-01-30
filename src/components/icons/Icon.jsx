import React, { Component } from "react";

import '../icons/Icon.scss'

import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import NoteService from "../../services/noteService";


//poper
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';


let More = ["Delete note", "Add label", "Add drawing", "Make a copy", "Show tick boxes"]

let colorssss = [
    "#f28b82", "#fbbc04", "#fff475", "#ccff90",
    "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
    "#fdcfe8", "#e6c9a8", "#e8eaed", "#aecbfa"
]

const noteService = new NoteService();

export class Icon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // popover
            anchorEl: false,
            color1: false
        }
    }

    //popover
    handleOpenMore = (e) => {
        this.setState({
            anchorEl: e.currentTarget,
        })
    }
    handleOpenColor = (e) => {
        this.setState({
            color1: e.currentTarget
        })
    }

    updateColor = (colorValue) => {
        console.log("In")
        if(this.props.mode === "create"){
            console.log("in if")
        this.props.changeColor(colorValue)
        } 
        else{
            console.log("in else")
            // update-part
            let data ={
                "noteIdList":[this.props.noteId],
                "color":colorValue
            }
            noteService.colorChange(data)
            .then(res =>{
                console.log(res)
                this.props.changeColor(colorValue)
                this.props.updateNote()
            })
            .catch(err =>{
                console.log( "U have an Error ->" + err)
            })
        }
    }

    useArchive=()=>{
        console.log("Archeive")
        if(this.props.mode === "create"){
        this.props.changeArchive(true)
        }
        else{
            console.log("in else")
            // update-part
            let data ={
                "noteIdList":[this.props.noteId],
                "isArchived": true
            }
            noteService.changeArchive(data)
            .then(res =>{
                console.log(res)
                this.props.updateNote()
            })
            .catch(err =>{
                console.log( "U have an Error ->" + err)
            })
        }
    }

    handleMore =() =>{
        console.log("Delete")
            // delete-part
            let data ={
                "noteIdList":[this.props.noteId],
                "isDeleted": false
            }
            noteService.deleteNote(data)
            .then(res =>{
                console.log(res)
                this.props.updateNote()
            })
            .catch(err =>{
                console.log( "U have an Error ->" + err)
            })
    }

    handleCloseMore = () => {
        this.setState({
            anchorEl: false,
        })
    }

    handleCloseColor = () => {
        this.setState({
            color1: false
        })
    }
    
    render() {

        //popover
        const { anchorEl, color1 } = this.state

        return (
            <div className="iconsSecondC">
                <IconButton><AddAlertOutlinedIcon /></IconButton>
                <IconButton><PersonAddAltOutlinedIcon /></IconButton>

                <div>

                    <IconButton><ColorLensOutlinedIcon onClick={(e) => this.handleOpenColor(e)} /></IconButton>
                    <Popover 
                    style={{display: 'flex'}}
                    // className="popOverIcon"
                        id="simple-menu"
                        anchorEl={color1}
                        keepMounted
                        open={Boolean(color1)}
                        onClose={this.handleCloseColor}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        {
                            colorssss.map((item, index) => (
                                <div className="iconColorss">
                                    <div className="colorPallets" onClick={() => this.updateColor(item)}
                                        style={{ backgroundColor: item }}>
                                        {item.backgroundColor}
                                    </div>
                                </div>
                            ))
                        }
                    </Popover>
                </div>

                <IconButton><PhotoOutlinedIcon /></IconButton>
                <div>
                    <IconButton><ArchiveOutlinedIcon onClick={(e) => this.useArchive(e)}/></IconButton>
                </div>
                <div>
                    <IconButton> <MoreVertOutlinedIcon onClick={(e) => this.handleOpenMore(e)} /> </IconButton>

                    <Popover
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleCloseMore}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        {
                            More.map((more, index) => (
                                <MenuItem onClick={() =>this.handleMore(more)}>
                                    {more}
                                </MenuItem>
                            ))
                        }
                    </Popover>
                </div>
            </div>
        )
    }
}

export default Icon