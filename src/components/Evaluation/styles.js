import styled from "styled-components";

export const QuestionFlex = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const QuestionBox = styled.div`
    width: 280px;
    height: 80px;
    margin : 20px;
    border-radius: 8px;
    border : 1px solid #929292;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 5;
`;

export const QuestionTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    text-align: center;
`;

export const LabelLeft = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 18px;
    color: #DD0000;
`;

export const LabelRight = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 18px;
    color: #3CB371;
`;


