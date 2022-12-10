import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-hot-toast";

export const TechContext = createContext({})

export function TechProvider ({ children }) {
    const [ isAddTechModalOpen, setIsAddTechModalOpen ] = useState(false)
    const [ isUpdateTechModalOpen, setIsUpdateTechModalOpen ] = useState(false)
    const [ cardTechId, setCardTechId ] = useState('')
    const { getUserProfile } = useContext(UserContext)
    const { userData } = useContext(UserContext)
    
    async function createTech (body) {
        try {
            const response = await api.post('users/techs', body)
            
        } catch (error) {
            console.log(error.response);
            if (error.response.status === 401) {
                toast.error('Tecnologia já cadastrada')
            }
        }
        
    }
    
    async function deleteTech (techId) {
        try {
            const response = await api.delete(`/users/techs/${techId}`)
            await getUserProfile()
            
        } catch (error) {
            
        }
    }

    async function updateTechStatus (techId, body) {
        try {
            const response = api.put(`users/techs/${techId}`, body)
            toast.success('Status de tecnologia editado')
            await getUserProfile()

        } catch (error) {
            console.log(error)
        }
    }
    
    function getTechInfo () {
        return userData.techs.find((tech) => tech.id === cardTechId)
    }
    
    return (
        <TechContext.Provider value={{
                deleteTech, 
                isAddTechModalOpen, 
                setIsAddTechModalOpen, 
                createTech, 
                isUpdateTechModalOpen, 
                setIsUpdateTechModalOpen, 
                getTechInfo, 
                setCardTechId, 
                cardTechId, 
                updateTechStatus 
            }}
        >
            {children}
        </TechContext.Provider>
    )
}