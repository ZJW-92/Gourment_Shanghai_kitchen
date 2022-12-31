import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__bg app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase Shanghai flavour" />
      <h1 className="app__header-h1">The True Flavor of Shanghai Kitchen</h1>
      <p className="p__cormorant" style={{ margin: '4rem 1rem' }}>Traditional Shanghai cuisine in Sweden.<br/>Here you kan enjoy our cuisine in À la carte menu originally from Shanghai kitchen.</p>
      <button type="button" className="custom__button" onClick={()=>window.location.href="#menu"}>See À la carte menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
