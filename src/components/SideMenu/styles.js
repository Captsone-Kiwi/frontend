import styled from "styled-components";

export const sideContainer = styled.div`
  display: flex;
  width: 20%;
  min-width: 250px;
  height: 100%;
  min-height: 1300px;
  background-color: #e1e5e3;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const sideBtn = styled.button`
  width: 80%;
  height: 32px;
  color: ${(props) => (props.current ? "white" : "black")};
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: ${(props) => (props.current ? "#3cb371" : "transparent")};
  border: none;
  border-radius: 10px;
  text-align: left;
  &:hover {
    cursor: pointer;
    background: #3cb371;
    border-radius: 10px;
    color: white;
  }
`;

export const Span = styled.p`
  margin: 0.3rem 1rem;
`;
