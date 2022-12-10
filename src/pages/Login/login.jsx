import { Link } from "react-router-dom";
import { StyledContainerForm } from "../../Styles/Container";
import { StyledSectionForm } from "../../Styles/sectionForm";
import { StyledTitle } from "../../Styles/typography";
import { FormLogin } from "./FormLogin/FormLogin";
import { StyledHeader } from "../../Styles/Header";
import { Toaster } from 'react-hot-toast';

export function Login() {

  
  return (
    <StyledContainerForm>
      <Toaster/>
      
      <StyledHeader>
        <StyledTitle tag={'h1'}>Kenzie Hub</StyledTitle>
      </StyledHeader>

      <StyledSectionForm>
        <StyledTitle tag={'h2'}>Login</StyledTitle>

        <FormLogin />

        <p>Ainda não possui uma conta?</p>
        <Link to={'/register'}>Cadastre-se</Link>
      </StyledSectionForm>
    </StyledContainerForm>
  );
}
