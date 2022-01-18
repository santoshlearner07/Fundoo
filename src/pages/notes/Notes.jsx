import React, { Component } from "react";
import DisplayNote from "../../components/displayNote/DisplayNote";
import TakeANote from "../../components/takeANote/TakeANote";


export class Notes extends Component {
    render() {
        return (
            <div>
                <TakeANote />
                <DisplayNote />
            </div>
        )
    }
}

export default Notes
