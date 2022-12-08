import { StyledTitle } from "../../../../../Styles/typography";
import { StyledTechCard } from "./StyledCard";
import { FaRegTrashAlt } from "react-icons/fa"
import { useContext } from "react";
import { TechContext } from "../../../../../contexts/TechContext";

export function TechCard ({ techId, title, status }) {
    const { deleteTech } = useContext(TechContext)
    
    function activateDeleteTech () {
        console.log()
    }
    
    return (
        <StyledTechCard>
            <StyledTitle tag={'h4'}>{title}</StyledTitle>
            <div>
                <small>{status}</small>
                <button onClick={() => deleteTech(techId)}><FaRegTrashAlt size={'20px'} color="rgba(255, 255, 255, 0.8)"/></button>
            </div>
        </StyledTechCard>
    )
}