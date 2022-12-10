import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { TechContext } from "../../../contexts/TechContext";
import { StyledTechForm } from "../../StyledTechForm";

export function UpdateTechForm () {
    const { register, handleSubmit } = useForm({})
    const { setIsUpdateTechModalOpen, deleteTech, getTechInfo, cardTechId, updateTechStatus } = useContext(TechContext)
    const techInfo = getTechInfo()
    
    async function updateSubmit (data) {
        await updateTechStatus(cardTechId, data)
        setIsUpdateTechModalOpen(false)
    }
    
    return (
        <StyledTechForm onSubmit={handleSubmit(updateSubmit)}>
            <label onClick={() => toast.error('Permitido editar somente o status')}>Nome do projeto</label>
            <input className="inputDisabled" disabled type="text" value={techInfo.title}/>

            <label htmlFor="updateTechStatus">Selecionar status</label>
            <select id="updateTechStatus" defaultValue={techInfo.status} {...register('status')}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            
            <div>
                <button type="submit">Salvar alterações</button>
                <button type="button" onClick={() => {deleteTech(cardTechId); setIsUpdateTechModalOpen(false) }}>Excluir</button>
            </div>
        </StyledTechForm>
    )
}