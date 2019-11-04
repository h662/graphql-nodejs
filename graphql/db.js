export const people = [
  {
    id: "0",
    name: "Hong",
    age: 31,
    gender: "Male"
  },
  {
    id: "1",
    name: "Kim",
    age: 22,
    gender: "Male"
  },
  {
    id: "2",
    name: "Hwang",
    age: 25,
    gender: "Female"
  },
  {
    id: "3",
    name: "Song",
    age: 38,
    gender: "Female"
  },
  {
    id: "4",
    name: "Choi",
    age: 29,
    gender: "Male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
