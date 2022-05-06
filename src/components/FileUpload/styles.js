import styled from "styled-components";

export const mainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
`;

export const formDiv = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  gap: 35px;
`;

export const uploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #c4c4c4;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

export const fileImg = styled.img`
  width: 60px;
`;

export const fileText = styled.text`
  font-size: 20px;
  color: #7a7a7a;
  margin-top: 43px;
  font-weight: bold;
`;

export const fileLabel = styled.label`
  font-size: 15px;
  display: flex;
  color: #7a7a7a;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const fileInput = styled.input`
  font-size: 15px;
  margin-top: 43px;
  margin-left: 110px;
  display: none;
`;

export const fileName = styled.label`
  display: flex;
  align-items: center;
  font-size: 17px;
`;

export const fileIcon = styled.img`
  width: 22px;
  margin: 0 12px;
`;
