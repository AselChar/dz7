import React from 'react';
import image from '../images/image.jpeg'
import "./Images.css"
const Images = () => {
    return (
        <div className="picture">
            <img src={image}/>
        </div>
    );
};

export default Images;