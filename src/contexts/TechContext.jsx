import { createContext, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({})

export function TechProvider ({ children }) {
    const [isAddTechModalOpen, setIsAddTechModalOpen] = useState(false)
    
    // function openCreateTechModal () {
    //     return 
    // }
    
    async function deleteTech (techId) {
        const response = await api.delete(`/users/techs/${techId}`)
    }
    
    return (
        <TechContext.Provider value={{ deleteTech, isAddTechModalOpen, setIsAddTechModalOpen }}>
            {children}
        </TechContext.Provider>
    )
}