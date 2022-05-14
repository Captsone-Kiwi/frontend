import styled from "styled-components";

export const mainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const uploadContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const detailContainer = styled.div`
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
  flex-direction: row-reverse;
  width: 100%;
  border-bottom: 3px solid #c4c4c4;
`;

export const uploadBtn = styled.button`
  width: fit-content;
  border: 2px solid #3cb371;
  background-color: white;
  color: #3cb371;
  padding: 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const infoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eff5f2;
  margin-top: 10px;
  border-radius: 4px;
`;

export const titleSpan = styled.p`
  font-size: 14px;
  color: black;
  width: 21%;
`;

export const noEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25% 20%;
  align-items: center;
  border: 1px solid #e1e6e3;
`;

export const noEvaluationText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #7a7a7a;
  margin-block-start: 0;
`;

// 여기부터 평가항목 이름 불러오는 부분
export const evaluationDetail = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 20px 15px;
  border: 1px solid #e1e6e3;
`;

export const leftDiv = styled.div`
  display: flex;
  align-self: center;
`;

export const rightDiv = styled.div`
  display: flex;
  align-self: center;
`;

export const evaluationTitle = styled.p`
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin: 3px;
`;

export const fileImg = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const greenButton = styled.button`
  width: 45px;
  height: 27px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 3px;
  align-items: center;
  background-color: #3cb371;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const Buttons = styled.button`
  width: 45px;
  height: 27px;
  padding-left: 9px;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 3px;
  align-items: center;
  font-size: 14px;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;
