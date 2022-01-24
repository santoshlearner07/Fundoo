import React, { Component } from "react";
import '../colors/IconColor.scss'
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import InvertColorsOffOutlinedIcon from '@mui/icons-material/InvertColorsOffOutlined';
import IconButton from '@mui/material/IconButton';

export class IconColor extends Component {

    render() {
        return (
            <div className="color-image">
                <div className="iconColor">
                    {/* <IconButton> <InvertColorsOffOutlinedIcon /> </IconButton> */}
                    <div className="red"></div>
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
                </div>
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