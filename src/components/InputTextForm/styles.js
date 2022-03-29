import styled from "styled-components";

export const inputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const interviewerList = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid #929292;
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 6px 10px;
`;

export const addBtn = styled.button`
  align-self: flex-start;
  padding: unset;
  background: transparent;
  border: none;
  margin-top: 7px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const addImg = styled.img`
  width: 25px;
`;

export const removeBtn = styled.button`
  align-self: flex-start;
  padding: unset;
  background: transparent;
  border: none;
  margin-top: 7px;
  margin-left: -28px;
  &:hover {
    cursor: pointer;
  }
`;

export const removeImg = styled.img`
  width: 25px;
`;
