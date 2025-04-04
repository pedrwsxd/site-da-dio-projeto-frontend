import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border: 1px solid rgb(46, 46, 46);
    border-radius: 30px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({ variant }) => variant !== "primary" && css`
    
    min-width: 167px;
    height: 33px;

    background-color: #E4105D;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    &::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -6px;
        border: 1px solid #E4105D;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }   
    
    `}
`