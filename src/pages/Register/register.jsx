import { StyledContainerForm } from "../../Styles/Container";
import { StyledHeader } from "../../Styles/Header";
import { StyledSectionForm } from "../../Styles/sectionForm";
import { StyledTitle } from "../../Styles/typography";
import { FormRegister } from "./FormRegister/FormRegister";
import { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

export function Register() {
    return (
      <StyledContainerForm>
        <Toaster/>
        
        <StyledHeader flex={true}>
          <StyledTitle tag={'h1'}>Kenzie Hub</StyledTitle>
          <Link to={'/'} >Voltar</Link>
        </StyledHeader>

        <StyledSectionForm>
          <StyledTitle tag={'h2'}>Crie sua conta</StyledTitle>
          <p>Rápido e grátis, vamos nessa</p>

          <FormRegister/>
        </StyledSectionForm>
      </StyledContainerForm>
    )
  }