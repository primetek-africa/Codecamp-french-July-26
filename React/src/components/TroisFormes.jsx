import { useState } from "react"
import { useEffect } from "react"

function Timing(){
 
const [heur,setHeure] = useState("")

// setHeure(new Date().toLocaleTimeString())
useEffect(
    ()=>{
        setHeure(new Date().toLocaleTimeString())
    },[]
)


return(
    <>
    <p>{heur}</p>
    </>
)

}

export default Timing