import styled from "styled-components";

export const QuestionInput = styled.input`
  width: 520px;
  // min-width: 400px;
  height: 40px;
  font-size: 18px;
  border: 1px solid #929292;
  border-radius: 12px;
  margin: 8px 20px 8px 20px;
  padding: 6px 10px;
`;

export const removeBtn = styled.button`
  align-self: flex-start;
  padding: unset;
  background: transparent;
  border: none;
  margin-top: 23px;
  margin-left: -53px;
  &:hover {
    cursor: pointer;
  }
`;

export const removeImg = styled.img`
  width: 25px;
`;

export const ScoreInput = styled.input`
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: 1px solid #929292;
  border-radius: 12px;
  margin: 8px 5px 8px 20px;
  padding: 6px 10px;
`;
