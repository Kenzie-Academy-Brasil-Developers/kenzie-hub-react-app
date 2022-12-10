import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { AddTechModal } from "../../../modals/AddTech/AddTech";
import { StyledTitle } from "../../../Styles/typography";
import { StyledSectionTechnologies } from "./StyledSection";
import { TechList } from "./TechList/TechList";

export function SectionTechnologies () {
    const { isAddTechModalOpen, setIsAddTechModalOpen } = useContext(TechContext)
    
    return (
        <>

            <StyledSectionTechnologies>
                <div>
                    <StyledTitle tag={'h3'}>Tecnologias</StyledTitle>
                    <button type="button" onClick={() => {setIsAddTechModalOpen(true)}}>+</button>
                </div>

                <TechList/>
            
            </StyledSectionTechnologies>
            
            {isAddTechModalOpen && <AddTechModal/>}
            
        </>
    )
}