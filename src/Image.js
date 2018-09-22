import React from 'react';
import BackgroundPic from './BackgroundPic.png'
function Image(props) {
    return (
       <div className="Image">
       <img src={BackgroundPic} alt="sourced by Annie Spratt on Unsplash" />
        </div>
    )
}

export default Image;