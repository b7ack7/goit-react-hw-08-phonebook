import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'store/operations';
import {ContactItem, Title, ContactButton } from './Contact.styled';

export const Contact = ({id, name, number}) => {
    const dispatch = useDispatch();
    return (
        <ContactItem>
            <Title>{name}: </Title><Title>{number}</Title>
            <ContactButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ContactButton>
        </ContactItem>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}