import {  useSelector, useDispatch } from "react-redux";
import { selectUser } from "store/selectors";
import { logout } from "store/operations";
import { Wrapper, Button, UserMail } from "./UserMenu.styled";

export const UserMenu = () => {
  const  {name} = useSelector(selectUser);
  const dispatch = useDispatch();
    return (
        <Wrapper>
          <UserMail>Welcome, {name}</UserMail>
          <Button type="button" onClick={() => dispatch(logout())}>Logout</Button>
        </Wrapper>
    );
}