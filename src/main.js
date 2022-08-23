import allData from  './data/rickandmorty/rickandmorty.js';
const root = document.getElementById ('root');
root.classList= 'characterStyle';
const characters = allData.results;

const generadorHTML =(results)=>{
const div = document.createElement('div');
div.classList= 'oneCharacter'

const img= document.createElement ('img');
img.setAttribute('src',results.image);

const titleName = document.createElement ('h2');
titleName.textContent=results.name;

const species = document.createElement ('p');
species.textContent= results.species;

div.append(img,titleName,species);
return div;
}

characters.forEach(oneCharacter=>root.appendChild(generadorHTML(oneCharacter)));