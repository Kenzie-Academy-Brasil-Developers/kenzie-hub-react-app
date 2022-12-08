import { StyledTechForm } from "../../StyledTechForm";

export function AddTechForm () {
    return (
        <StyledTechForm>
            <label htmlFor="techName">Nome</label>
            <input type="text" id="techName" placeholder="Digite o nome da tecnologia"/>

            <label htmlFor="techStatus">Selecionar status</label>
            <select id="techStatus">
                <option value="">Iniciante</option>
                <option value="">Intermediário</option>
                <option value="">Avançado</option>
            </select>
            
            <button type="submit">Cadastrar Tecnologia</button>
        </StyledTechForm>
    )
}