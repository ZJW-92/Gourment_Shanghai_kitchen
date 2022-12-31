import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__bg app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="À la carte menu" />
      <h1 className="headtext__cormorant">Chef's Choice</h1>
    </div>

    
    <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading"> Cold cuisine</p>
        <div className="app__specialMenu_menu_items">
          {data.cold_menu.map((cold_menu, index) => (
            <MenuItem key={cold_menu.title + index} title={cold_menu.title} price={cold_menu.price} tags={cold_menu.tags} />
          ))}
        </div>
      </div>



      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading"> Warm cuisine</p>
        <div className="app__specialMenu_menu_items">
          {data.menu.map((menu, index) => (
            <MenuItem key={menu.title + index} title={menu.title} price={menu.price} tags={menu.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
       <img src={images.kaofu} alt="menu__img" />
       <img src={images.xunyu} alt="menu__img" />
       <img src={images.eggdumpling} alt="menu__img" />
        <img src={images.xiaolongbao} alt="menu__img" />
        <img src={images.noodle} alt="menu__img" />
        <img src={images.duck} alt="menu__img" />
        <img src={images.yanduxian} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading"> Beer & drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.beer_drinks.map((beer_drinks, index) => (
            <MenuItem key={beer_drinks.title + index} title={beer_drinks.title} price={beer_drinks.price} tags={beer_drinks.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
       <img src={images.beer} alt="menu__img" />
       <img src={images.beer2} alt="menu__img" />
       <img src={images.beer3} alt="menu__img" />
 

      </div>

    </div>
  </div>
);

export default SpecialMenu;
