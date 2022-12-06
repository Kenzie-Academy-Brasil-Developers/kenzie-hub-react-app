import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { StyledButton } from "../../../Styles/ButtonSubmit";
import { StyledForm } from "../../../Styles/form";
import { loginSchema } from "./loginSchema";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export function FormLogin() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  })

  if (loading) {
    document.body.style.cursor = 'progress'
  } else {
    document.body.style.cursor = 'auto'
  }
  
  async function loginUser(userData) {
    try {
      setLoading(true)

      const response = await api.post('sessions', userData)

      localStorage.setItem('userData', JSON.stringify(response.data))

      toast.success('Login efetuado com sucesso');
      
      setTimeout(() => {
        navigate(`/dashboard/${response.data.user.id}`)
      }, 2200)
      
      
    } catch (error) {
      setLoading(true)

      if (error.response.data.message === 'Incorrect email / password combination') {
        toast.error('E-mail ou senha incorreta');
      }
      console.log(error)

    } finally {
      setLoading(false)
    }
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

      <StyledButton type="submit" disabled={loading}>{loading ? 'Aguarde...' : 'Entrar'}</StyledButton>
    </StyledForm>
  );
}
