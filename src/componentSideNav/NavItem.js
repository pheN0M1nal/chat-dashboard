import { React, useState } from 'react';
import Icon1 from './icons/Icon1';
import Icon2 from './icons/Icon2';
import Icon3 from './icons/Icon3';
import Icon4 from './icons/Icon4';
import Icon5 from './icons/Icon5';
import Icon6 from './icons/Icon6';
import Icon7 from './icons/Icon7';
import Bar from './icons/Bar';
import Item1 from './Item1';
const NavItem = () => {
	const [isClicked, setIsClicked] = useState(false);
	const onClick = () => {
		setIsClicked(!isClicked);
	};

	const greycol = '2A8BF2';
	return (
		<div className='navItems_container'>
			{/*             */}
			<Item1 />
			<Item1 />
			<Item1 />

			<div className='d-flex2 navItem'>
				<div className={`bar ${isClicked ? 'display' : 'hide'}`}>
					<Bar />
				</div>
				<div className='navItem_icon'>
					<Icon2 color={greycol} />
				</div>
				<div className='navItemName'>chat</div>
			</div>

			{/*             */}

			<div className='d-flex2 navItem'>
				<div className={`bar ${isClicked ? 'display' : 'hide'}`}>
					<Bar />
				</div>
				<div className='navItem_icon'>
					<Icon3 />
				</div>
				<div className='navItemName'>contact</div>
			</div>

			{/*             */}

			<div className='d-flex2 navItem'>
				<div className={`bar ${isClicked ? 'display' : 'hide'}`}>
					<Bar />
				</div>
				<div className='navItem_icon'>
					<Icon4 />
				</div>
				<div className='navItemName'>notifications</div>
			</div>

			{/*             */}

			<div className='d-flex2 navItem'>
				<div className={`bar ${isClicked ? 'display' : 'hide'}`}>
					<Bar />
				</div>
				<div className='navItem_icon'>
					<Icon5 />
				</div>
				<div className='navItemName'>calender</div>
			</div>
			{/*             */}

			<div className='d-flex2 navItem'>
				<div className={`bar ${isClicked ? 'display' : 'hide'}`}>
					<Bar />
				</div>
				<div className='navItem_icon'>
					<Icon6 />
				</div>
				<div className='navItemName'>settings</div>
			</div>
			{/*             */}

			<div className='navItem d-flex2 navItemLogOut '>
				<div className={`bar ${isClicked ? 'display' : 'hide'}`}>
					<Bar />
				</div>
				<div className='navItem_icon'>
					<Icon7 />
				</div>
				<div className='navItemName'>log out</div>
			</div>
		</div>
	);
};

export default NavItem;
