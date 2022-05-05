import styled from "styled-components";

export const QuestionInput = styled.input`
  width: 70%;
  min-width: 600px;
  height: 40px;
  font-size: 15px;
  border: 1px solid #929292;
  border-radius: 12px;
  margin: 8px 10px 8px 0;
  padding: 6px 10px;
`;

export const removeBtn = styled.button`
  align-self: flex-start;
  padding: unset;
  background: transparent;
  border: none;
  margin-top: 20px;
  margin-left: -80px;
  &:hover {
    cursor: pointer;
  }
`;

export const removeImg = styled.img`
  width: 25px;
`;
