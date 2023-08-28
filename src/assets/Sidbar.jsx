import React from 'react'
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import {BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill}

 from 'react-icons/bs'
const Sidbar = ({openSidebarToggle, OpenSidebar }) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}  >
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < LocalHospitalOutlinedIcon  className="icon_header" />LOCALHOSPITAL
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            
                <BsGrid1X2Fill className='icon'/>Dashbord
            
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <Person2OutlinedIcon className='icon'/>PASTIENTS
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <  AppRegistrationOutlinedIcon className='icon'/>REGISTRE
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                < CalendarMonthOutlinedIcon className='icon'/>CALENDRIER
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <Diversity1OutlinedIcon className='icon'/>MEDECIN
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGrid3X3GapFill className='icon'/>SPECIALITES
            </a>
        </li>
          <li className='sidebar-list-item'>
            <a href="">
                <FactCheckOutlinedIcon className='icon'/>FACTURE
            </a>
        </li>
        <li className='sidebar-list-item'>
            
                <BsFillGrid3X3GapFill className='icon'/>Categories
            
        </li>
        <li className='sidebar-list-item'>
            
                <BsPeopleFill className='icon'/>Customers
            
        </li>
        <li className='sidebar-list-item'>
            
                < BsListCheck className='icon'/>Inventory
            
        </li>
        <li className='sidebar-list-item'>
            
                <BsMenuButtonWideFill className='icon'/>reports
            
        </li>
        <li className='sidebar-list-item'>
            
                <BsFillGearFill className='icon'/>Setting
            
        </li>
      </ul>
    </aside>
  )
}

export default Sidbar
