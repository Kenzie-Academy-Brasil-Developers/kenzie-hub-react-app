import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { StyledNoTech } from "./StyledNoTech";
import { TechCard } from "./TechCard/TechCard";

export function TechList () {
    const { userData } = useContext(UserContext)
    console.log(userData);
    
    return (
        <>
            {userData?.techs ?
                <ul>
                    {userData && userData.techs.map((tech) => 
                        <TechCard
                            key={tech.id}
                            title={tech.title}
                            status={tech.status}
                        />
                    )}
                </ul>
                :
                <StyledNoTech>
                    <p>Sem tecnologias no momento. Clique no símbolo de + para adicionar uma tecnologia nova.</p>
                </StyledNoTech>
            }
        </>
    )
}