import {NextResponse} from 'next/server';
export async function GET() {
    return NextResponse.json({message:'bonjour depuis API de next '})
    
}


//CRUD
//GET: recuperer les donnees
//POST : CREATE (poster les donnees)
//UPDATE: Mise en jours
//DELETE: Effacer les donnees
//db.json

