// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1932,
//   },
// ];
function findTheOldest(people) {
  return (oldestPerson = people.reduce((oldest, current) => {
    if (!oldest.yearOfDeath || !current.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
      current.yearOfDeath = new Date().getFullYear();
    }
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  }));
}
// console.log(findOldestPerson(people));
// console.log(ans);
// Do not edit below this line
module.exports = findTheOldest;
