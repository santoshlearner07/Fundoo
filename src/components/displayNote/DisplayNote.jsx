import React, { Component } from 'react';
import './DisplayNote.scss';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Icon from "../icons/Icon";
import NoteService from "../../services/noteService";
const noteService = new NoteService();

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: theme.spacing(80)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        width: theme.spacing(100)
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/* <CloseIcon /> */}
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export class DisplayNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: this.props.noteArray.title,
            description: this.props.noteArray.description,
            color: '#ffffff',
            id: ' '
        }
    }

    handleOpenTitle = (item) => {
        this.setState({
            open: true,
            title: item.title,
            description: item.description,
            id: item.id
        })
        console.log(this.state.title)
    }

    handleClose = () => {
        // this.setState({
        //     open: false,
        // })
        console.log("thisIsDisplayNote");

        const formData = new FormData();
        formData.append("title",this.state.title)
        formData.append("description",this.state.description)
        formData.append("color",this.state.color)
        formData.append("isArchived",this.state.archive)

        noteService.getNote(formData)
            .then(res => {
                console.log(res)
            this.props.updateDiplayNote();
            // this.props.changeColor();
                this.setState({
                    open: false,
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

    fetchOriginalName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        console.log("this is Display Note")
        return (
            <div className='mainDisplay' >
                {
                    this.props.noteArray.map((item, index) => (
                        <div className='displayBox' style={{ backgroundColor: item.color }}>
                            <div className='titleDescrip' onClick={() => this.handleOpenTitle(item)}>

                                {item.title}<br></br>
                                {item.description}<br></br>

                            </div>
                            <div className="displayThirdPart">
                                <div className="displayIcons">

                                    <Icon mode="update" noteId={item.id} />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose} >

                            <input type="text" style={{ border: "none", outline: "none" }} value={this.state.title} name="title" onChange={(e) => this.fetchOriginalName(e)} />

                        </BootstrapDialogTitle>
                        <DialogContent>

                            <input type="text" style={{ border: "none", outline: "none" }} value={this.state.description} name="description" onChange={(e) => this.fetchOriginalName(e)} />

                        </DialogContent>
                        <DialogContent className="close-Icon" >

                            <Icon mode="update" noteId={this.state.id} />
                            <Button autoFocus onClick={(title, description) => this.handleClose(title, description)}> Close </Button>
                        </DialogContent>

                    </div>
                </BootstrapDialog>
            </div>
        )
    }
}

export default DisplayNote