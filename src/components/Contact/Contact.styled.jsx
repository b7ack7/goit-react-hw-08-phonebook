import styled from '@emotion/styled';

export const ContactItem = styled.li`
width: 650px;
padding: 12px;
display: flex;
justify-content: space-between;
align-items: baseline;
font-size: 16px;
outline: 2px solid #cbd6ee;
border: none;
border-radius: 2px;
`;

export const Title = styled.span`
flex-basis: calc(100% / 3);
`;

export const ContactButton = styled.button`
appearance: none;
cursor: pointer;
border: 0;
border-radius: 4px;
background: #4676D7;
color: #fff;
padding: 8px;
font-size: 16px;
text-transform: capitalize;
:hover,
:focus {
    background: #1d49aa;
    outline: none;
    box-shadow: 0 0 0 3px #cbd6ee;
}
`;