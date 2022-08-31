import allData from "./data/rickandmorty/rickandmorty.js";
import { filterAll, sortAll } from "./data.js";

const All = document.getElementById("All");
const Alive = document.getElementById("Alive");
const Dead = document.getElementById("Dead");
const Male = document.getElementById("Male");
const Female = document.getElementById("Female");
const Unknown = document.getElementById("Unknown");
const sortA = document.getElementById("sortA");
const sortZ = document.getElementById("sortZ");

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
//Ejecuta la opcion de filtrado//
All.addEventListener("click", () => {
  root.innerHTML = "";
  const characters = allData.results;
  characters.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});

Alive.addEventListener("click", () => {
  root.innerHTML = "";
  const aliveFilter = filterAll("status", "Alive");
  aliveFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Dead.addEventListener("click", () => {
  root.innerHTML = "";
  const deadFilter = filterAll("status", "Dead");
  deadFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Male.addEventListener("click", () => {
  root.innerHTML = "";
  const maleFilter = filterAll("gender", "Male");
  maleFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Female.addEventListener("click", () => {
  root.innerHTML = "";
  const femaleFilter = filterAll("gender", "Female");
  femaleFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
Unknown.addEventListener("click", () => {
  root.innerHTML = "";
  const unknownFilter = filterAll("gender", "unknown");
  unknownFilter.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
//Ejecuta la opcion de ordenamienti//
sortA.addEventListener("click", () => {
  root.innerHTML = "";
  const sorted = sortAll(true);
  sorted.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});

sortZ.addEventListener("click", () => {
  root.innerHTML = "";
  const sorted = sortAll(false);
  sorted.forEach((oneCharacter) =>
    root.appendChild(generadorHTML(oneCharacter))
  );
});
