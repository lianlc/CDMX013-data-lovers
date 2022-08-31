// estas funciones son de ejemplo
import allData from "./data/rickandmorty/rickandmorty.js";
const characters = allData.results;

function filterAll(key, parameter) {
  return characters.filter((character) => character[key] === parameter);
}

function sortAll(order) {
  const characterCopy = [...characters];

  characterCopy.sort((A, Z) => {
    if (order) {
      return A.name.localeCompare(Z.name);
    } else {
      return Z.name.localeCompare(A.name);
    }
  });
  return characterCopy;
}

export { filterAll, sortAll };

//export const example = () => {
// return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
