import { createContext, useState } from "react";

const userContext = createContext()

const UserProvider = ({children})=>{
    // we can access these states across the components
    const [value,setValue] = useState('');

    return(
        <userContext.Provider value={{value,setValue}}>
            {children}
        </userContext.Provider>
    )
}

export {userContext,UserProvider};