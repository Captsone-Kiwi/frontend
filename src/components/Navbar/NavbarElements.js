import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #FEFFFE;
height: 65px;
display: flex;
justify-content: space-between;
padding: 0.2rem 4rem;
z-index: 12;
box-sizing: border-box;
filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
`;

export const NavLink = styled(Link)`
color: #7A7A7A;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #3CB371;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
color: #929292;
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #FFFFFF;
padding: 12px 15px;
margin-right: 12px;
color: #3CB371;
outline: none;
border: 2px solid #3CB371;
border-radius: 99px;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
white-space: nowrap;

&:hover {
	transition: all 0.2s ease-in-out;
	background: #3CB371;
	color: #FFFFFF;
}
`;

export const LoginBtnLink = styled(Link)`
width: 230px !important;
text-align: center;
border-radius: 4px;
background: #FFFFFF;
margin-right: 12px;
color: #3CB371;
outline: none;
border: 2px solid #3CB371;
border-radius: 99px;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
white-space: nowrap;
padding: 12px 15px;
box-sizing: border-box;

&:hover {
	transition: all 0.2s ease-in-out;
	background: #3CB371;
	color: #FFFFFF;
}
`;

export const LogoDiv = styled.div`
width: 60px;
height: 40px;
margin-right: 24px;
background: url(img/logo.png);
background-repeat: no-repeat;
background-size: contain;
`;
