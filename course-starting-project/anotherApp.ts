// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Michal',
  age: 22,
  hobbies: ['sports', 'chess'],
  role: Role.ADMIN,
};

console.log(person);
