import styled from 'styled-components';
import { purpleBlue } from './colors';

export const NameText = styled.p`
    font-size: 1.8em;
    color: ${purpleBlue};
    margin-bottom: 15px;
    text-align: center;
    font-family: 'Anton', sans-serif;
    @media (max-width: 480px) {
        font-size: 1.7em
    }
`;