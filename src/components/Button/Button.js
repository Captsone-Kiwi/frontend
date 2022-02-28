import React from "react";
import {
  Btn
} from './styles';


const Button = ({ onClick, title, color, textcolor}) => (
  <>
    <Btn onClick={onClick} color={color} textcolor={textcolor}>{title}</Btn>
  </>
)

export default Button;