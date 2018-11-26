import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const BigCard = styled.div`
    box-sizing: border-box;
    padding: 66px 44px 44px 44px;
    width: 325px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    animation: ${fadeUp} 1s;
    @media (max-width: 480px) {
        width: 80%;
    }
`
