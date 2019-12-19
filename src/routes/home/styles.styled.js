import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`
export const StyledCard = styled.div`
    width: 800px;
    height: 900px;
    background: white;
    box-shadow: 6px 10px 60px 1px #000;
    opacity: 0.85;
    border-radius: 10px;
    padding: 0 5px 5px 0;

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 600px;
        
    }
`