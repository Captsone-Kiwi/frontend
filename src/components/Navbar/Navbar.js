import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
LogoDiv,
Wrap
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<LogoDiv/>
			<NavLink to='/solution' activeStyle>
				Solution
			</NavLink>
			<NavLink to='/question' activeStyle>
				Question
			</NavLink>
		</NavMenu>
		<NavBtn>
			<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
			<NavBtnLink to='/login'>Login</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
