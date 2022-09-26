import React, { Component } from "react";
import music from"../../assets/audio/ANBR - Learn to Fly.mp3";

export default class Audio extends Component {
    render() {
        return(
            <>
                <audio className="Audio" controls>
                <source src={ music } type="audio/mpeg"/>
                </audio>

            </>
        )
    }
}