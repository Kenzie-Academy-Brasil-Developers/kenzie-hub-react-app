import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { StyledButton } from "../../../Styles/ButtonSubmit";
import { StyledForm } from "../../../Styles/form";
import { loginSchema } from "./loginSchema";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";


export function FormLogin() {
  const { loginUser, loadingLogin } = useContext(UserContext)

  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  })

  if (loadingLogin) {
    document.body.style.cursor = 'progress'
  } else {
    document.body.style.cursor = 'auto'
  }
  
  async function submitLogin (data) {
    await loginUser(data)
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitLogin)} noValidate>
      <label htmlFor="emailLogin">E-mail</label>
      <input
        type="email"
        id="emailLogin"
        placeholder="Digite seu email..."
        {...register('email')}
      />

      <label htmlFor="passwordLogin">Senha</label>
      <input
        type="password"
        id="passwordLogin"
        placeholder="Digite sua senha..."
        {...register('password')}
      />

      <StyledButton type="submit" disabled={loadingLogin}>{loadingLogin ? 'Aguarde...' : 'Entrar'}</StyledButton>
    </StyledForm>
  );
}
