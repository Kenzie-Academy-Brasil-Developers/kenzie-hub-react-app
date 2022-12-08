import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({})

export function UserProvider ({ children }) {
    const [loadingLogin, setLoadingLogin] = useState(false)
    const [loadingRegister, setLoadingRegister] = useState(false)
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()
    
    async function loginUser(userData) {
        try {
          setLoadingLogin(true)
    
          const response = await api.post('sessions', userData)
    
          localStorage.setItem('userData', JSON.stringify(response.data))
    
          toast.success('Login efetuado com sucesso');
          
          setTimeout(() => {
            navigate(`/dashboard/${response.data.user.id}`)
          }, 2200)
          
          
        } catch (error) {
          setLoadingLogin(true)
          console.log(error)
    
          if (error.response.data.message === 'Incorrect email / password combination') {
            toast.error('E-mail ou senha incorreta');
          }
          
        } finally {
          setLoadingLogin(false)
        }
    }
    

    async function createUser(newUserData) {
        try {
          setLoadingRegister(true)
          const response = await api.post('users', newUserData)
          toast.success('Cadastrado com sucesso');
    
          setTimeout(() => {
            navigate('/')
          }, 2200)
          
        } catch (error) {
          setLoadingRegister(true)
          if (error.response.data.message === 'Email already exists') {
            toast.error('O e-mail inserido já existe')
          }
          console.log(error.response.data.message)
    
        } finally {
          setLoadingRegister(false)
        }
    }
    
    async function getUserProfile() {
      const userToken = JSON.parse(localStorage.getItem('userData')).token
      
      api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
      const response = await api.get('profile')

      setUserData(response.data)
    }
    getUserProfile()

    
    return (
        <UserContext.Provider value={{ loginUser, loadingLogin, createUser, loadingRegister, getUserProfile, userData }}>
            {children}
        </UserContext.Provider>
    )
}