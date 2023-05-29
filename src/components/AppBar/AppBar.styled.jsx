import styled from '@emotion/styled';
import { NavLink } from "react-router-dom"; 

export const Header = styled.header`
padding: 10px 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
margin-bottom: 12px;
`;

export const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: baseline;
`;

export const Link = styled(NavLink)`
cursor: pointer;
font-size: 20px;
line-height: 1.5;
font-weight; 500;
text-decoration: none;
color: inherit;
&.active {
    color: #4676D7;
}
:hover,
:focus {
    color: #4676D7;
}   
`;

export const LinkWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
`;