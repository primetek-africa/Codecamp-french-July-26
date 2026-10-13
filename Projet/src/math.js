export function multiply(a,b){
  return a*b
}


export const user={
  name: 'tresor',
  age:21
}

export const  users= ['Alice','Bob','Charlie']

export function isAdult(age){
     return age >= 18
}

//test
//toEqual()
//toContain()

/////////////////
const list = document.getElementById("list")

document.getElementById("send").addEventListener("click",()=>{
  const value = document.getElementById("comment").value;

  // list.innerHTML += `<p>${value}</p>`
  const p = document.createElement("p")
  p.textContent= value;
  list.appendChild(p)
})
