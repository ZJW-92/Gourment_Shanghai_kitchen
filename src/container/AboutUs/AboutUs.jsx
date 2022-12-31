import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__bg app__aboutus app__wrapper section__padding" id="about">
    <div className="app__wrapper_info">
      <SubHeading title="About us" />
      <h1 className="app__aboutus-h1">Our history</h1>
      <p className="p__cormorant" style={{ margin: '4rem 1rem' }}>Shanghai cuisine is the youngest of the ten major cuisines of China which still has a more than 400 years of history.
      Traditionally called Benbang Cai(本帮菜) that can be originated from Ming and Qing dynasties. 
      <br/>
      <br/>Shanghia cuisine mainly use local fish, pork,chicken,beef and vegetables and are good at braised in soy sauce. 
      <br/>
      <br/>It's flavor can be summarized as thick oily soy sauce (浓油赤酱), oily but not greasy(油而不腻).</p>
    </div>
     <div className="app__aboutus-content_sh flex__center">
        <img src={images.sh} alt="about_sh" />
      </div>
  </div>
);

export default AboutUs;







