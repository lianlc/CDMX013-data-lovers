// estas funciones son de ejemplo
import allData from "./data/rickandmorty/rickandmorty.js";
const characters = allData.results;


//Esta funcion necesita que le indiques la llave de acesso, el parametro que tiene que cumplir,y de que data//
function filterAll(key, parameter, data) {

  return data.filter((character) => character[key] === parameter);
}
function filterDead() {
  return characters.filter((character) => character.status === "Dead");
}
function filterAlive() {
  return characters.filter((character) => character.status === "Alive");
}
function sortAll(order, data) {
  const charactersCopy = [...data]; //creamos una copia por que sort no devuelve un arreglo, si no modifica el que tienes//
  charactersCopy.sort((A, Z) => { //sort va comprar entre el elemento A y Z (los puedes llamar de cualquier forma como x,y o 1,2)
    if (order) {
      return A.name.localeCompare(Z.name); //localcompere ayuda a que lo compare en el idioma ingles, por que sort se rigue por su propio ordenamiento 
    } else {
      return Z.name.localeCompare(A.name);
    }
  });
  return charactersCopy; //regresa el arreglo modificado
}
export { filterAll, filterDead, filterAlive, sortAll };

//export const example = () => {
// return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
