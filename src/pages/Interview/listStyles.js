import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const Span = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 5px;
`;

export const selectionDiv = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #c4c4c4;
`;

export const selectBtn = styled.button`
  width: fit-content;
  color: #7a7a7a;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  padding-bottom: 5px;
  margin-bottom: -2px;
  border-bottom: ${(props) => (props.current ? "3px solid #3cb371" : "none")};
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #3cb371;
  }
`;
