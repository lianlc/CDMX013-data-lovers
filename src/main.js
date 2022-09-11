import allData from "./data/rickandmorty/rickandmorty.js";
import { filterAll, filterDead, filterAlive, sortAll, search } from "./data.js";

const All = document.getElementById("All");
const Alive = document.getElementById("Alive");
const Dead = document.getElementById("Dead");
const Male = document.getElementById("Male");
const Female = document.getElementById("Female");
const Unknown = document.getElementById("Unknown");
const sortA = document.getElementById("sortA");
const sortZ = document.getElementById("sortZ");
const Logo = document.getElementById("Logo");
//const buttonSearch = document.getElementById("buttonSearch");

const parameterUser = document.getElementById("searchCharacter");

const root = document.getElementById("root");
root.classList = "characterStyle";
const characters = allData.results;

const generadorHTML = (results) => {
  const div = document.createElement("div");
  div.classList = "oneCharacter";

  const img = document.createElement("img");
  img.setAttribute("src", results.image);

  const titleName = document.createElement("h2");
  titleName.textContent = results.name;

  const species = document.createElement("p");
  species.textContent = results.species;

  div.append(img, titleName, species);
  return div;
};

characters.forEach((oneCharacter) =>
  root.appendChild(generadorHTML(oneCharacter))
);
//Esto sirve para limpiar los filtros//
All.addEventListener("click", () => {
  root.innerHTML = "";
  const characters = allData.results;
  characters.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
//Ejecuta la opcion de filtrado//
Alive.addEventListener("click", () => {
  root.innerHTML = "";
  const aliveFilter = filterAlive("status", "Alive");
  aliveFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Dead.addEventListener("click", () => {
  root.innerHTML = "";
  const deadFilter = filterDead();
  deadFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Male.addEventListener("click", () => {
  root.innerHTML = "";
  const maleFilter = filterAll("gender", "Male", characters);
  maleFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Female.addEventListener("click", () => {
  root.innerHTML = "";
  const femaleFilter = filterAll("gender", "Female", characters);
  femaleFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Unknown.addEventListener("click", () => {
  root.innerHTML = "";
  const unknownFilter = filterAll("gender", "unknown", characters);
  unknownFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
parameterUser.addEventListener("change", () => {
  root.innerHTML = "";
  const searchFilter = search(parameterUser.value, characters);
  searchFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});

//Ejecuta la opcion de ordenamiento//
sortA.addEventListener("click", () => {
  root.innerHTML = "";
  const sorted = sortAll(true, characters);
  sorted.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
sortZ.addEventListener("click", () => {
  root.innerHTML = "";
  const sorted = sortAll(false, characters);
  sorted.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Logo.addEventListener("click", () => {
  root.innerHTML = "";
  const characters = allData.results;
  characters.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
