import { createContext,useState } from "react";

//1. CREER LE CANAL DE DONNEES
const ThmeContext = createContext();

//2.  UN COMPOSANT PROVIDER QUI POSSEDE LE STATE (USESTATE) ET FOURNIT LA DONNEE + LA FONCTION POUR 
//LA MODIFIER
export function ThemeProvider({children}){
    const [theme,setTheme]= useState("clair");

    function basculerTheme(){
        setTheme(theme ==="clair"?"sombre":"clair")
    }


    return (
        <ThmeContext.Provider value={{theme,basculerTheme}}>
            {children}
        </ThmeContext.Provider>
    )
}

export default ThmeContext