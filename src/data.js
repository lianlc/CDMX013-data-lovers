// estas funciones son de ejemplo
import allData from "./data/rickandmorty/rickandmorty.js";
const characters = allData.results;

function filterAll(key, parameter) {
  return characters.filter((character) => character[key] === parameter);
}
export { filterAll };

//export const example = () => {
// return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
