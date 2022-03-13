import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 100px;
`;

export const mainImg = styled.img`
  width: 50%;
  margin-top: -20px;
  z-index: -1;
`;

export const textContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: center;
  margin-right: 60px;
`;

export const mainText = styled.p`
  font-size: 33px;
  font-weight: 600;
  color: #4b4b4b;
  margin-bottom: -2.5rem;
`;

export const mainTextBold = styled.p`
  font-size: 48px;
  font-weight: 700;
  color: #4b4b4b;
`;

export const mainTextDetail = styled.p`
  font-size: 12px;
  font-weight: 300;
  width: 80%;
  color: #86979e;
  margin-top: -0.5rem;
`;

export const btnContainer = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
  margin-top: 45px;
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 99px;
  background-color: white;
  border: 2px solid #3cb371;
  color: #3cb371;
  margin: 10px 10px 0 0;
  &:hover {
    cursor: pointer;
    background-color: #3cb371;
    color: white;
  }
`;

export const imgContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const roomImg = styled.img`
  width: 50%;
  height: 100%;
`;

// export const hoverImg = styled.div`
//   width: 100%;
//   background: #3cb371;
// `;

// export const roomText = styled.p`
//   font-size: 28px;
//   font-weight: bold;
//   color: white;
// `;

// export const roomDetail = styled.p`
//   font-size: 18px;
//   font-weight: normal;
//   color: white;
// `;

export const adContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 0 10% 0;
`;

export const adText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #4b4b4b;
  margin-bottom: 5%;
`;

export const adImg = styled.img`
  width: 90%;
`;
