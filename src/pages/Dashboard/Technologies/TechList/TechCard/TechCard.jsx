import { StyledTitle } from "../../../../../Styles/typography";
import { StyledTechCard } from "./StyledCard";
import { FaRegTrashAlt } from "react-icons/fa"

export function TechCard () {
    
    
    return (
        <StyledTechCard>
            <StyledTitle tag={'h4'}>React JS</StyledTitle>
            <div>
                <small>Avançado</small>
                <button><FaRegTrashAlt size={'20px'} color="rgba(255, 255, 255, 0.8)"/></button>
            </div>
        </StyledTechCard>
    )
}