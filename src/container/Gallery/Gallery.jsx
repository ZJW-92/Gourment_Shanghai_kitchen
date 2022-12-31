import React from 'react';

import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';



const Gallery = () => (

  <div className="app__bg app__gallery flex__center" id="gallery">
  <div className="app__gallery-content">
    <SubHeading title="Gallery" />
    <h1 className="app__gallery-h1">Photo Gallery</h1>
  </div>
  <div className="app__gallery-images_container" >
          {[images.chicken,images.duck,images.meat,images.yanduxian,images.fishnoodle,images.xiaolongbao,].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
</div>

);

export default Gallery;
