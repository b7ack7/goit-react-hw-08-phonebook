import styled from '@emotion/styled';

export const Wrapper = styled.div`
display: flex;
align-items: baseline;
gap: 20px;
`;

export const Button = styled.button`
appearance: none;
cursor: pointer;
border: 0;
border-radius: 4px;
background: #4676D7;
color: #fff;
padding: 4px 8px;
font-size: 20px;
text-transform: capitalize;
:hover,
:focus {
    background: #1d49aa;
    outline: none;
    box-shadow: 0 0 0 3px #cbd6ee;
}
`;

export const UserMail = styled.p`
font-weight: 700;
`;