import { createContext, useState } from "react";

const userContext = createContext()

const UserProvider = ({children})=>{
    const [value,setValue] = useState('');

    return(
        <userContext.Provider value={{value,setValue}}>
            {children}
        </userContext.Provider>
    )
}

export {userContext,UserProvider};