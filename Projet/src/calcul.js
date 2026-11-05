
export function calculerTotal(nombres) {
  return nombres.reduce((somme, nombre) => somme + nombre, 0);
}
