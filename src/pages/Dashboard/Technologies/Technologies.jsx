import { StyledTitle } from "../../../Styles/typography";
import { StyledSectionTechnologies } from "./StyledSection";
import { TechList } from "./TechList/TechList";

export function SectionTechnologies () {
    
    return (
        <StyledSectionTechnologies>
            <div>
                <StyledTitle tag={'h3'}>Tecnologias</StyledTitle>
                <button type="button">+</button>
            </div>

            <TechList/>
        </StyledSectionTechnologies>
    )
}