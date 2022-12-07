import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import { api } from "../../../../services/api";
import { StyledTechList } from "./StyledList";
import { TechCard } from "./TechCard/TechCard";

export function TechList () {
    const { userData } = useContext(UserContext)
    console.log(userData);
    
    return (
        <StyledTechList>
            {userData ? userData.techs.map((tech) => <TechCard/>) : null}
        </StyledTechList>
    )
}