import { StyledForm } from "../../../Styles/form";
import { StyledButton } from "../../../Styles/ButtonSubmit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema";
import toast, { Toaster } from 'react-hot-toast';
import { api } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";


export function FormRegister() {
  const { loadingRegister, createUser } = useContext(UserContext)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur'
  })
  
  async function submitForm (data) {
    await createUser(data)
    reset()
  }

  function renderToast(type) {
    if (type) {
      toast.error(type.message)
    }
  }
  
  return (
    <StyledForm onSubmit={handleSubmit(submitForm)} noValidate>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        placeholder="Digite seu nome..."
        {...register('name')}
      />
      {errors.name && renderToast(errors.name)}

      <label htmlFor="emailRegister">E-mail</label>
      <input
        type="email"
        id="emailRegister"
        placeholder="Digite seu email..."
        {...register('email')}
      />
        
      {errors.email && renderToast(errors.email)}

      <label htmlFor="passwordRegister">Senha</label>
      <input
        type="password"
        id="passwordRegister"
        placeholder="Crie sua senha..."
        {...register('password')}
      />
      {errors.password && renderToast(errors.password)}

      <label htmlFor="passwordConfirmation">Confirmar Senha</label>
      <input
        type="password"
        id="passwordConfirmation"
        placeholder="Digite novamente sua senha..."
        {...register('passwordConfirmation')}
      />
      {errors.passwordConfirmation && renderToast(errors.passwordConfirmation)}

      <label htmlFor="userBio">Bio</label>
      <input 
        type="text" 
        id="userBio" 
        placeholder="Fale sobre você..." 
        {...register('bio')}
      />
      {errors.bio && renderToast(errors.bio)}

      <label htmlFor="contact">Contato</label>
      <input 
        type="text" 
        id="contact" 
        placeholder="Telefone ou Link de sua Rede Social" 
        {...register('contact')}
      />
      {errors.contact && renderToast(errors.contact)}

      <label htmlFor="course_module">Selecionar módulo</label>
      <select id="course_module" {...register('course_module')}>
        <option value="">Selecione um módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </select>
      {errors.email && renderToast(errors.course_module)}

      <StyledButton type="submit" disabled={loadingRegister}>Cadastrar</StyledButton>
    </StyledForm>
  );
}
