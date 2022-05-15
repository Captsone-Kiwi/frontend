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
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;

export const smallDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 15px;
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

export const EvalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
`;

export const addBtn = styled.button`
  align-self: center;
  padding: unset;
  background: transparent;
  border: none;
  margin-top: 120px;
  &:hover {
    cursor: pointer;
  }
`;

export const addImg = styled.img`
  width: 35px;
`;

export const buttonSection = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 200px;
`;

export const Button = styled.button`
  width: 65px;
  height: 35px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #c4c4c4;
  color: black;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
  }
`;

export const removeBtn = styled.button`
  align-self: center;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const removeImg = styled.img`
  width: 25px;
`;
