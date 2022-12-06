import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required('Nome obrigatório'),
    email: yup
        .string()
        .required('E-mail obrigatório')
        .email('Insira um e-mail válido'),
    password: yup
        .string()
        .required('Senha obrigatória')
        .min(6, 'No mínimo seis caracteres'),
    passwordConfirmation: yup
        .string()
        .required('Confirme sua senha')
        .oneOf([yup.ref('password')], 'As senhas estão diferentes'),
    bio: yup
        .string(),
    contact: yup
        .string()
        .required('Telefone obrigatório'),
    course_module: yup
        .string()
        .required('Selecione um módulo')
})