import { StyledTitle } from "../../Styles/typography";
import { StyledBackgroundModal, StyledContainerModal } from "../StyledModal";
import { AddTechForm } from "./AddTechForm/addTechForm";

export function AddTechModal () {
    return (
        <StyledBackgroundModal>
            <StyledContainerModal>
                <div>
                    <StyledTitle tag={'h3'}>Cadastrar Tecnologia</StyledTitle>
                    <span>X</span>
                </div>
                
                <AddTechForm/>
            </StyledContainerModal>
        </StyledBackgroundModal>
    )
}