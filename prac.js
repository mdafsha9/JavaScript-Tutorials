//JavaScript object Map

const person = new Map();
person.set('firstName' , 'Lorie');
    person.set('lastName' , 'Wright');
    person.set('age' , 58)
    person.set(1 , 'one')

console.log(person.get("lastName"));

console.log(person);

for(let key of person.keys()){
  console.log(key, typeof key);
}
