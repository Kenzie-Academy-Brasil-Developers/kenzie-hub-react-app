import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTitle } from "../../Styles/typography";
import { StyledBackgroundModal, StyledContainerModal } from "../StyledModal";
import { AddTechForm } from "./AddTechForm/AddTechForm";

export function AddTechModal () {
    const { setIsAddTechModalOpen } = useContext(TechContext)
    
    return (
        <StyledBackgroundModal>
            <StyledContainerModal>
                <div>
                    <StyledTitle tag={'h3'}>Cadastrar Tecnologia</StyledTitle>
                    <span onClick={() => {setIsAddTechModalOpen(false)}}>X</span>
                </div>
                
                <AddTechForm/>
            </StyledContainerModal>
        </StyledBackgroundModal>
    )
}