import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { StyledNoTech } from "./StyledNoTech";
import { TechCard } from "./TechCard/TechCard";

export function TechList () {
    const { userData } = useContext(UserContext)

    useEffect(() => {
        console.log(userData)
    }, [])
    
    return (
        <>
            {userData?.techs.length !== 0 ?
                <ul>
                    {userData && userData.techs.map((tech) => 
                        <TechCard
                            key={tech.id}
                            techId = {tech.id}
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