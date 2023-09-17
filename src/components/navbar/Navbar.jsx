import React from 'react';
import './navbar.scss';

// import material ui icons
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AirplayIcon from '@mui/icons-material/Airplay';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

// navbar component
const Navbar = () => {
	return ( 
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' name="searchfor" id="searchbar" />
                    <SearchIcon className='icon' />
                </div>
                <div className="items">
                    <div className="item">
                        <TranslateIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <ModeNightIcon className='icon' />
                    </div>
                    <div className="item">
                        <AirplayIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className='icon' />
                    </div>
                    <div className="item">
                        <ChatBubbleRoundedIcon className='icon' />
                    </div>
                    <div className="item">
                        <ListAltRoundedIcon className='icon' />
                    </div>
                    <div className="item">

                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Navbar;
