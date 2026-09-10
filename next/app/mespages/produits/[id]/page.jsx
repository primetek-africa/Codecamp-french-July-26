//ISR :ssg+ssr
//ISR: incremental static regeneration
export default async function Produit({params}) {
    const {id}= await params;

    const res= await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,{
            next: {revalidate: 30},//ISR
        }
    );

    if(!res.ok){
        throw new Error('produit introuvable');

    }
    const produit= await res.json();

    return(
        <>
          <h1>{produit.title}</h1>
        </>
    )
    
}