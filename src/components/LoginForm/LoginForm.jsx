import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getLogin } from 'store/operations';
import { FormContainer, Input, Button } from './LoginForm.styled';


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(10).required()
})

export const LoginForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({email, password}) => {
        dispatch(getLogin({email, password}));
    
      }
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" {...register("email")}/>
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" {...register("password")}/>
            <Button type="submit">Login</Button>
        </FormContainer>
    )
}