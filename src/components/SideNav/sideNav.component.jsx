import React from 'react'
import logo from '../../assets/img/Logo.png';
import speedmeter from '../../assets/icons/speedometer_icon.png';
import calender from '../../assets/icons/calender_icon.png';

const SideNav = () => {
  return (
    <div className='sideNav_column'>
      <div className='sideNav_img'>
        <img src={logo} alt='' />
      </div>
      <div className='sideNav_icons'>
        <div className='speedmeter_icon'>
          <img src={speedmeter} alt='' />
        </div>
        <div className='calender_icon'>
          <img src={calender} alt='' />
        </div>
        <div className='speedmeter_icon'>
          <img src={speedmeter} alt='' />
        </div>
      </div>
    </div>
  )
}

export default SideNav;