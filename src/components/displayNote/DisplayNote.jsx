import React, { Component } from "react";
import { Button } from "@material-ui/core";

import '../displayNote/DisplayNote.scss'
import Icon from "../icons/Icon";
import Notes from "../../pages/notes/Notes";
import NoteService from "../../services/noteService";

const noteService = new NoteService();
export class DisplayNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // noteArray: []
        };
    }

    render() {
        console.log("this is Display Note")
        // console.log(this.props.noteArray)
        return (

            <div className="mainDisplay">

                {this.props.noteArray.map((item, index) => (
                    < div className="displayBox">

                        <div className="titleDescrip">
                            {item.title}  <br></br>
                            {item.description}
                        </div>
                        <div className="displayThirdPart">
                            <div className="displayIcons">
                                <Icon />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayNote