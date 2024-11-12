import React, { createContext, useState, useContext } from 'react';

// Create Context
export const GlobalContext = createContext();

// Create Provider Component
const initialvalue=[]
export const GlobalProvider = ({ children }) => {
    
    const [state, setState] = useState({globalValue: "Initial Value",
        user: { user_id: "", token: "" }});
        const updateGlobalState = (key, value) => {
            setState(prevState => ({
                ...prevState,
                [key]: value
            }));
        };
    return (
        <GlobalContext.Provider value={{ state, updateGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the Global Context
export const useGlobalContext = () => useContext(GlobalContext);