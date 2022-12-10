import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTitle } from "../../Styles/typography";
import { StyledBackgroundModal, StyledContainerModal } from "../StyledModal";
import { UpdateTechForm } from "./UpdateTechForm/UpdateTechForm";

export function UpdateTechModal () {
    const { setIsUpdateTechModalOpen } = useContext(TechContext)
    
    return (
        <StyledBackgroundModal>
            <StyledContainerModal>
                <div>
                    <StyledTitle tag={'h3'}>Detalhes da Tecnologia</StyledTitle>
                    <span onClick={() => {setIsUpdateTechModalOpen(false)}}>X</span>
                </div>

                <UpdateTechForm/>
            </StyledContainerModal>
        </StyledBackgroundModal>
    )
}