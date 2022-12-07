import { useParams } from "react-router-dom";
import { api } from "../../../../services/api";
import { StyledTechList } from "./StyledList";
import { TechCard } from "./TechCard/TechCard";

export function TechList () {
    // const userToken = localStorage.getItem('userData').token
    // const response = api.get('profile', {
    //     headers: authorization: `Bearer: ${userToken}`
    // })
    
    return (
        <StyledTechList>
            <TechCard/>
        </StyledTechList>
    )
}