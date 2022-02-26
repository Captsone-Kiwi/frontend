import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
LogoDiv,
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
			<NavBtnLink to='/signin'>Sign In</NavBtnLink>
			<NavBtnLink to='/login'>Login</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
