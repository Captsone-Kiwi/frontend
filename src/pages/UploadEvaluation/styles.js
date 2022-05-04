import styled from "styled-components";

export const mainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const uploadContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const prevBtn = styled.button`
  width: fit-content;
  border: none;
  background-color: white;
  color: #3cb371;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const prevImg = styled.img`
  width: 7px;
  margin-right: 5px;
`;

export const Span = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;

export const topDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const EvalTitle = styled.input`
  height: 30px;
  width: 60%;
  color: black;
  cursor: text;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  border: none;
  border-radius: 2px;
`;

export const middleDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 7px;
  border-bottom: 3px solid #c4c4c4;
`;

export const smallDiv1 = styled.div`
  width: 70%;
  min-width: 600px;
  display: flex;
  justify-content: center;
`;

export const smallDiv2 = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #7a7a7a;
  margin-block: 0;
  width: fit-content;
  align-self: center;
`;

export const bottomDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
