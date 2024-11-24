import { styled, css} from 'styled-components'

export const Title=styled.h1`
    font-size: 3rem;
    background-color: aqua;
    font-weight: 600;
    transition: all 6s;
    ${props=>props.theme==='dark' && css`
       background-color : black;
       color: white;
    `}
    &:hover{
        background-color:yellow;
        color:green;
    }
`