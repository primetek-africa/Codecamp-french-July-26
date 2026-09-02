function Cartes({produit}){


    return(
    <>
      <div>
        <h3>{produit.titre}</h3>
        <p>prix sera{produit.prix}</p>
      </div>
    </>
    );
}
export default Cartes;