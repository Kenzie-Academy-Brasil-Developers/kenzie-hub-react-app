import { StyledTitle } from "../../../../../Styles/typography";
import { StyledTechCard } from "./StyledCard";
import { FaRegTrashAlt } from "react-icons/fa"
import { useContext } from "react";
import { TechContext } from "../../../../../contexts/TechContext";
import { UpdateTechModal } from "../../../../../modals/UpdateTech/UpdateTech";

export function TechCard ({ techId, title, status }) {
    const { deleteTech, setCardTechId } = useContext(TechContext)
    const { isUpdateTechModalOpen, setIsUpdateTechModalOpen } = useContext(TechContext)
    
    
    return ( 
        <>
            <StyledTechCard onClick={() => {setCardTechId(techId); setIsUpdateTechModalOpen(true)}}>
                <StyledTitle tag={'h4'}>{title}</StyledTitle>
                <div>
                    <small>{status}</small>
                    <button onClick={(event) => {event.stopPropagation(); deleteTech(techId)}}>
                        <FaRegTrashAlt className="butao" size={'20px'} color="rgba(255, 255, 255, 0.8)"/>
                    </button>
                </div>
            </StyledTechCard>

           {isUpdateTechModalOpen && <UpdateTechModal/>}
        </>
    )
}