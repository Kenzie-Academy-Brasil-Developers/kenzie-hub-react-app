import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email obrigatório')
        .email('Insira um email válido'),
    password: yup
        .string()
        .required('Senha obrigatória')
        .min(6, 'No mínimo seis caracteres')
})