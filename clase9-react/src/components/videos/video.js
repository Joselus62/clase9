import React, { Component } from "react";
import anio2022 from"../../assets/video/VID-20211231-WA0118.mp4";

export default class Video extends Component {
    render() {
        return(
            <>
                <video src={ anio2022 } width={ 300 } alt="anio2022"></video>
            </>
        )
    }
}
