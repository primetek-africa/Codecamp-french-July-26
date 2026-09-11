export default async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1',{
        cache:'no-store',//FORCER LE SSR
    });

    const user =  await res.json();

    return (
        <div>
            <h1>bienvenue {user.name}</h1>
            <p>Derniere connexion :{new Date().toLocaleTimeString()}</p>
        </div>
    )
    
}
//SSR :Server-Side Rendering   
//NPM RUN BUILD
//SSG: STATIC SITE GENERATION

//CRUD:creat update delete