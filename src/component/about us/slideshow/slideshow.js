
import 'react-slideshow-image/dist/styles.css';
import './styles.css';

import React from 'react';
import { Zoom } from 'react-slideshow-image';

const Slideshow = () => {
  const images = [
    'https://www.protecautomacao.com.br/system/upload/website/7/image_editor/1575005433_5de0acf94da98.jpg',
    'https://www.festo.com/media/cms/central/media/editorial/img/cc/business-sectors-automation-didactic-16977-festo_fix1920x880.jpg',
    'https://www.festo.com/media/cms/central/media/editorial/img/men-optimization-maintenance-machine-d0440_13c_fix1920x880.jpg'
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img alt="slide" style={{ objectFit: "cover", width: "360px" , height: "240px"}} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;