import { useState } from "react";

function Count(){
const [count, setCount]= useState(0)

return(
    <div>
        <p>Compteur: {count}</p>
        <button onClick={()=>setCount(count+1)}>Incrementer</button>
    </div>
)


}

export default Count