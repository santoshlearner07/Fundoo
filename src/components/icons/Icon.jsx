import React, { Component } from "react";

import '../icons/Icon.scss'

import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconColor from "../colors/IconColor";


//poper
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';


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
                        <IconColor />
                    </Popover>
                </div>

                <IconButton><PhotoOutlinedIcon /></IconButton>
                <IconButton><ArchiveOutlinedIcon /></IconButton>
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
                        <MenuItem onClick={this.handleCloseMore}>Delete note</MenuItem>
                        <MenuItem onClick={this.handleCloseMore}>Add label</MenuItem>
                        <MenuItem onClick={this.handleCloseMore}>Add drawing</MenuItem>
                        <MenuItem onClick={this.handleCloseMore}>Make a copy</MenuItem>
                        <MenuItem onClick={this.handleCloseMore}>Show tick boxes</MenuItem>
                    </Popover>
                </div>
            </div>
        )
    }
}

export default Icon