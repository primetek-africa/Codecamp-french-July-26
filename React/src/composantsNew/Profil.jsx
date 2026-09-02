import { useContext } from "react"
import ThmeContext from "../ThemeContex"

function Profil(){
const {theme,basculerTheme}=useContext(ThmeContext)

return(
    <div className={`profil profil-${theme}`}>
        <p>Theme actuel est:<strong>{theme}</strong></p>
        <button onClick={basculerTheme}>changer de theme</button>
    </div>
)
}
export default Profil

//prop drilling
//L'API  context 