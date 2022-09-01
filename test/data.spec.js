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
describe("Prueba unitaria de filtro", () => {
  it("is a function", () => {
    expect(typeof filterAll).toBe("function");
  });

  it("Retornar el arreglo de los personajes especificados", () => {
    expect(filterAll("status", "Dead", people)).toEqual([people[2]]);
  });
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
