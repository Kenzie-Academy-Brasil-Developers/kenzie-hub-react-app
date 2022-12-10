import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import { StyledTechForm } from "../../StyledTechForm";

export function AddTechForm () {
    const { getUserProfile } = useContext(UserContext)
    const { createTech, setIsAddTechModalOpen } = useContext(TechContext)
    const { register, handleSubmit} = useForm({})
    
    
    async function submitAddTech (data) {
        await createTech(data)
        await getUserProfile()
        setIsAddTechModalOpen(false)
    }
    
    return (
        <StyledTechForm onSubmit={handleSubmit(submitAddTech)}>
            <label htmlFor="techName">Nome</label>
            <input type="text" id="techName" placeholder="Digite o nome da tecnologia" {...register('title')}/>

            <label htmlFor="techStatus">Selecionar status</label>
            <select id="techStatus" {...register('status')}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            
            <button type="submit">Cadastrar Tecnologia</button>
        </StyledTechForm>
    )
}