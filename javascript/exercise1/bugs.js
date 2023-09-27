// Objective: Fix the code bellow so it runs without errors
const people = [
  {
    id: 1,
    name: 'Bob',
    age: 20
  },
  {
    id: 2,
    name: 'Alice',
    age: 22
  }
];

function updatePerson(person) {
  person.age += 1; // Due to bobs aniversary he should be one year older
  person.name = 'Bob new name';
  return person;
}

console.log(updatePerson());

function getPersonName() {
  const updatedPerson = updatePerson();
  return updatedPerson.name;
}

console.log(getPersonName());

function getNameById(id) {
  let person = null;
  if (id < 3) {
    person = people.find(person => person.id === id);
  }
  return person.name;
}

console.log(getNameById(100));
