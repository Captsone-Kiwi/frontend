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
  padding-top: 70px;
  padding-bottom: 150px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const SignUpForm = styled.form`
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

export const TextInput = styled(TextField)`
  width: 100%;
  .MuiInputBase-input {
    height: 28px;
    padding-left: 10px;
    border: 1px solid #929292;
    border-radius: 12px;
    color: #929292;
  }
`;

export const CheckForm = styled.div`
  display: flex;
  padding: 40px 0 30px 0;
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

export const TextBtn = styled.button`
  display: inline;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
  font-family: AppleSD;
  cursor: pointer;
  color: #3cb371;
`;

export const Button = styled.button`
  width: 40%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 99px;
  background-color: #3cb371;
  border: 2px solid #3cb371;
  color: white;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    background-color: rgba(60, 179, 113, 0.6);
    border: 2px solid rgba(60, 179, 113, 0.2);
    color: #3cb371;
  }
`;

export const ContentBox = styled.div`
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 2;
  width: 620px;
  height: 520px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 1em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  min-width: 300px;
`;

export const Content = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #343434;
`;

export const ContentText = styled.p`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 60%;
  padding: 10px;
  text-align: left;
  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: white;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 100px;
    height: 10px;
    background-size: 26px 63px;
  }
  &::-webkit-scrollbar-track {
    background: #6d6d6d;
    border: 4px solid transparent;
    background-clip: content-box; /* THIS IS IMPORTANT */
  }
`;

export const ConfirmButton = styled(Button)`
  width: 30%;
  background-image: none;
  border-radius: 50px;
  font-size: 15px;
`;

export const MemberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 50px 0;
`;

export const MemberBtn = styled.button`
  width: 48%;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 12px;
  background-color: ${(props) => (props.current ? "#929292" : "white")};
  border: 1px solid #929292;
  color: ${(props) => (props.current ? "white" : "#929292")};
  align-self: center;
  &:hover {
    cursor: pointer;
    background-color: #929292;
    color: white;
  }
`;
