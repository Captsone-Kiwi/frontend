import React from "react";


const Btn = styled.button`
  color: ${props => props.textcolor};
  outline: none;
  box-shadow: none;
  background-color ${props => props.color};
  height: 45px;
  width: 100%;
  border-radius: 99px;

`;

const Button = ({ onClick, title, color, textcolor}) => (
  <>
    <Btn onClick={onClick} color={color} textcolor={textcolor}>{title}</Btn>
  </>
)

export default Button;