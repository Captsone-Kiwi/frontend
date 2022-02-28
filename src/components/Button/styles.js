import styled from 'styled-components';
import React from 'react';

export const Btn = styled.button`
  color: ${props => props.textcolor};
  outline: none;
  box-shadow: none;
  background-color ${props => props.color};
  height: 45px;
  width: 100%;
  border-radius: 99px;

`;