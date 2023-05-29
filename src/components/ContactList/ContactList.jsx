import {  useSelector } from "react-redux";
import { Contact } from 'components/Contact';
import { ContactListWrapper } from './ContactList.styled';
import { selectVisibleContacts } from "store/selectors";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);
    return (
        <ContactListWrapper >{
            visibleContacts.map(contact => {
                return (<Contact key={contact.id} 
               {...contact}/>)
            })
        }
        </ContactListWrapper>
  
    )
}



