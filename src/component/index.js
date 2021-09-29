import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css';

const Slideshow = () => {
    const images = [
      'images/11.jpg',
      'images/12.jpg',
      'images/13.jpg',
      'images/14.jpg',
      'images/15.jpg',
      'images/16.jpg',
      'images/17.jpg',
    ];
     
      const props = {
        arrows: false,
        indicators: i => (<div className="indicator">{i + 1}</div>)
      }
     
      return (
        <div>
          <Fade {...props}>
            {images.map((each, index) => (
              <div key={index} style={{width: "100%"}}>
                <img alt="" className="slideshow-conatiner-images" style={{ objectFit: "cover", width: "100%" }} src={each} />
              </div>
            ))}
          </Fade>
        </div>
      )
    }

export default Slideshow;