import React, { Component } from "react";
import '../colors/IconColor.scss'
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import InvertColorsOffOutlinedIcon from '@mui/icons-material/InvertColorsOffOutlined';
import IconButton from '@mui/material/IconButton';

    let colors =[
        "#f28b82","#fbbc04","#fff475","#ccff90",
        "#a7ffeb","#cbf0f8","#aecbfa","#d7aefb",
        "#fdcfe8","#e6c9a8",""
    ]





export class IconColor extends Component {

    updateColor = (newColor) => {
        this.props.changeColor(newColor);
    }

    render() {
        return (
            <div className="color-image">
                {/* {this.updateColor.newColor.map((item, index) => ( */}
                    <div className="iconColor" onClick={() => this.updateColor()}>
                        {/* <IconButton> <InvertColorsOffOutlinedIcon /> </IconButton> */}
                        <div className="red" ></div>
                        <div className="orange"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="teal"></div>
                        <div className="blue"></div>
                        <div className="darkblue"></div>
                        <div className="purple"></div>
                        <div className="pink"></div>
                        <div className="brown"></div>
                        <div className="grey"></div>
                        <div className="violet"></div>
                    </div>
                 {/* ))}  */}

                {/* <div className="iconImage">
                    <IconButton> <ImageNotSupportedOutlinedIcon /> </IconButton>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/grocery_light_thumb_0615.svg" ></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/food_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/music_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/recipe_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/notes_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/places_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/travel_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/video_light_thumb_0615.svg"></img>
                    <img className="image" src="https://www.gstatic.com/keep/backgrounds/celebration_light_thumb_0715.svg"></img>
                </div> */}
            </div>
        )
    }
}

export default IconColor