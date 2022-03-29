import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SendWho = styled.div`
  background-color: #E5E5E5;
  font-size: 12px;
  color: #7a7a7a;
  width: 70px;
  height: 28px;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const SendBtn = styled.div`
  background-color: #3CB371;
  color: white;
  width: 60px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

  export const Span = styled.div`
  font-size: 12px;
  color: #7a7a7a;
  `;

  export const WrapColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `;

  export const WrapRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  `;

  export const TextInput = styled(TextField)`
  width: 100%;
  height: 50px;
  .MuiInputBase-input {
    height: 28px;
    padding-left: 10px;
    border: none;
    border-radius: 8px;
    color: #929292;
    font-size: 12px;
  }
  .MuiInput-underline:after {
    border-bottom: none;
  }
`;
