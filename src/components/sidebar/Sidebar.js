import React from 'react';

// import scss file
import './sidebar.scss';

// import icons from material ui
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SubjectIcon from '@mui/icons-material/Subject';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

// sidebar component
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<span className='logo'>yaysaAdmin</span>
			</div>
			<hr />
			<div className='center'>
				<ul className='List'>
					<p className='title'>MAIN</p>
					<li className='ListItem'>
						<DashboardIcon className='icon' />
						<span className='ListItemText'>Dashboard</span>
					</li>
					<p className='title'>LISTS</p>
					<li className='ListItem'>
						<PersonIcon className='icon' />
						<span className='ListItemText'>Users</span>
					</li>
					<li className='ListItem'>
						<ShoppingBagIcon className='icon' />
						<span className='ListItemText'>Products</span>
					</li>
					<li className='ListItem'>
						<ChangeCircleIcon className='icon' />
						<span className='ListItemText'>Orders</span>
					</li>
					<p className='title'>USEFUL</p>
					<li className='ListItem'>
						<LocalShippingIcon className='icon' />
						<span className='ListItemText'>Delivery</span>
					</li>
					<li className='ListItem'>
						<QueryStatsIcon className='icon' />
						<span className='ListItemText'>Stats</span>
					</li>
					<li className='ListItem'>
						<NotificationsIcon className='icon' />
						<span className='ListItemText'>Notifications</span>
					</li>
						<p className='title'>SERVICE</p>
					<li className='ListItem'>
						<MonitorHeartIcon className='icon' />
						<span className='ListItemText'>System Health</span>
					</li>
					<li className='ListItem'>
						<SubjectIcon className='icon' />
						<span className='ListItemText'>Logs</span>
					</li>
					<li className='ListItem'>
						<SettingsIcon className='icon' />
						<span className='ListItemText'>Settings</span>
					</li>
					<p className='title'>USER</p>
					<li className='ListItem'>
						<AccountBoxIcon className='icon' />
						<span className='ListItemText'>Profile</span>
					</li>
					<li className='ListItem'>
						<LogoutIcon className='icon' />
						<span className='ListItemText'>Logout</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div className='colorOption'></div>
				<div className='colorOption'></div>
			</div>
		</div>
	);
};

export default Sidebar;
