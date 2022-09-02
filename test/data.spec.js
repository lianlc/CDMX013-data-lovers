import { filterAll } from "../src/data.js";

const people = [
  {
    id: 1,
    name: "Elsy",
    status: "Alive",
  },
  {
    id: 2,
    name: "Celeste",
    status: "Alive",
  },
  {
    id: 3,
    name: "Tony Stark",
    status: "Dead",
  },
];
const peopleDead = [
  {
    id: 3,
    name: "Tony Stark",
    status: "Dead",
  },
];

describe("Prueba unitaria de filtro", () => {
  it("is a function", () => {
    expect(typeof filterAll).toBe("function");
  });

  it("Retornar el arreglo de los personajes especificados", () => {
    expect(filterAll("status", "Dead", people)).toBe(peopleDead);
  });
});
const nameData = [
  { name: "Elsy" },
  { name: "Celeste" },
  { name: "Tom" },
  { name: "Adrian" },
];
const name2 = [
  { name: "Adrian" },
  { name: "Celeste" },
  { name: "Elsy" },
  { name: "Tom" },
];
const name3 = [
  { name: "Tom" },
  { name: "Elsy" },
  { name: "Celeste" },
  { name: "Adrian" },
];

describe("Prueba unitaria de orden alfabetico", () => {
  it("is a function", () => {
    expect(typeof sortAll).toBe("function");
  });

  it("Retornar el arreglo de forma ordenada alfabeticamente empezando por la A", () => {
    expect(sortAll(true, nameData)).toEqual(name2);
  });
  it("Retornar el arreglo de forma ordenada alfabeticamente empezando por la Z", () => {
    expect(sortAll(false, nameData)).toEqual(name3);
  });
});
