import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import {BsTelephone} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" >Find us </h1> 
      <br/><br/>
      <div >
        
        <p className="p__cormorant"> <MdLocationPin color="#e6c18f" size= "2rem"/> 
          Shanghainesiskgatan 5A, Göteborg, Sweden</p>
        <p className="p__cormorant" style={{ color: '#e6c18f', margin: '3rem 0' }}>Opening Hours</p>
        <p className="p__cormorant">Mon - Fri: 12:00 am - 00:00 am</p>
        <p className="p__cormorant">Sat - Sun: 11:00 am - 03:00 am</p>
      </div>
      <br/><br/>
      <button type="button" className="custom__button" > 
      <BsTelephone color="white" size= "2rem"/> 
      Ring us: 012-345678</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
