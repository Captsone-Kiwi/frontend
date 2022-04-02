import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 99px;
    background: rgba(247, 247, 247, 0.83);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    width: 200px;

`;

export const CallButton = styled.div`
    background-color: rgba(235, 64, 64, 0.8);
    width: 42px;
    height: 42px;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
