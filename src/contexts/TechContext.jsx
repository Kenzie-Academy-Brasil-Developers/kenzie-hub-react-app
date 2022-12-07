import { createContext } from "react";

export const TechContext = createContext({})

export function TechProvider ({ children }) {
    const test = 'test'
    
    return (
        <TechContext.Provider value={{test}}>
            {children}
        </TechContext.Provider>
    )
}