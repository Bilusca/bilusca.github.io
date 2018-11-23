import styled from 'styled-components';
import { NameText } from './NameText';

export const InfoText = styled(NameText)`
    font-weight: 300;
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0;
    @media (max-width: 480px) {
        font-size: 1.2em;
    }
`