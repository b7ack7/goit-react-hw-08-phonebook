import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "store/operations";
import { selectError, selectIsLoading } from "store/selectors";
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";
import { Loader } from "components/Loader";
import { PageContainer, PageTitle } from "./Pages.styled";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <PageContainer>
             <ContactForm />
            <PageTitle>Contacts</PageTitle>
            <Filter/>
            {isLoading  && <Loader/>}
            {error && <h2>{error}</h2>}
            <ContactList/>
        </PageContainer>
    )
}

export default ContactsPage;
