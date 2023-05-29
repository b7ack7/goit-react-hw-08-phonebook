import { RegisterForm } from "components/RegisterForm";
import { PageTitle, PageContainer } from "./Pages.styled";

const RegisterPage = () => {
    return (
        <PageContainer>
            <PageTitle>Registration page</PageTitle>
            <RegisterForm/>

        </PageContainer>
    );
}
export default RegisterPage;