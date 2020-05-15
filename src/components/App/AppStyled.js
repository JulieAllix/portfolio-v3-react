import styled from 'styled-components';
import theme from '../../styles/theme';

const AppStyled = styled.div`
    font-size: 16px;
    font-weight: 100;
    font-family: ${theme.contentFont};
    color: ${theme.fontColor};
    
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    .portfolio {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
    }
`

export default AppStyled;