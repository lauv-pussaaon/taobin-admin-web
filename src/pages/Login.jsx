import styled from "styled-components";
import Logo from "../ui/layouts/Logo";
import Heading from "../ui/components/Heading";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    row-gap: 1.2rem;
    background-color: var(--color-grey-50);
`;

const Form = styled.div`
    padding: 2.4rem 4rem;

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
`;

const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.2rem 0;
`;

const Label = styled.label`
    font-weight: 500;
`;

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        navigate("/");
    }

    return (
        <LoginLayout>
            <Logo />
            <Heading as="h2">Log in to your account</Heading>
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Label>Email address</Label>
                    <Input type="email" value="demo@taobin.com" readOnly />
                </FormRow>
                <FormRow label="Password">
                    <Input type="password" value="demo" readOnly />
                </FormRow>
                <FormRow>
                    <Button onClick={handleSubmit}>Login</Button>
                </FormRow>
            </Form>
        </LoginLayout>
    );
}

export default Login;
