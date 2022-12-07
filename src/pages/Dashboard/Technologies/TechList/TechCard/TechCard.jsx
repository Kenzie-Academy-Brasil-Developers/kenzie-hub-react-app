import { StyledTitle } from "../../../../../Styles/typography";
import { StyledTechCard } from "./StyledCard";
import { FaRegTrashAlt } from "react-icons/fa"

export function TechCard ({ title, status }) {
    
    
    return (
        <StyledTechCard>
            <StyledTitle tag={'h4'}>{title}</StyledTitle>
            <div>
                <small>{status}</small>
                <button><FaRegTrashAlt size={'20px'} color="rgba(255, 255, 255, 0.8)"/></button>
            </div>
        </StyledTechCard>
    )
}