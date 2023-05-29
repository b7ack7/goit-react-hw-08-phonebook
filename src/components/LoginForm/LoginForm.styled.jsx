import styled from '@emotion/styled';

export const FormContainer = styled.form`
width: 450px;
display: flex;
flex-direction: column;
gap: 12px;
`;

export const Input = styled.input`
padding: 15px;
font-size: 16px;
outline: 2px solid #cbd6ee;
border: none;
border-radius: 2px;
`;

export const Button = styled.button`
appearance: none;
cursor: pointer;
border: 0;
border-radius: 4px;
background: #4676D7;
color: #fff;
padding: 15px;
font-size: 16px;
text-transform: capitalize;
:hover,
:focus {
    background: #1d49aa;
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
}
`;