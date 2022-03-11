import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Checkbox } from "semantic-ui-react";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 200px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const LoginForm = styled.form`
  width: 620px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const textInput = styled(TextField)`
  width: 100%;
  .MuiInputBase-input {
    height: 28px;
    margin-bottom: 20px;
    padding-left: 10px;
    border: 1px solid #929292;
    border-radius: 8px;
    color: #929292;
  }
`;

export const LoginUtil = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0 60px 0;
`;

export const IdCheckBox = styled(Checkbox)`
  margin-right: 5px;
  &&& > {
    label:before,
    input:focus ~ label:before,
    label:after {
      background-color: #1c1c1c;
      border: 1px solid white;
      border-radius: 0;
      width: 17px;
      height: 16px;
    }
    input:checked~label:after{
      color: #3CB371;
      font-size: 12px;
    }
`;

export const CheckForm = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 45%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 99px;
  background-color: white;
  border: 2px solid #3cb371;
  color: #3cb371;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #3cb371;
    color: white;
  }
`;
