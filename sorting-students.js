var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

sortByName = function (a, b){
  if (a.name < b.name){
    return -1;
  }else if(a.name > b.name){
    return 1;
  }else{
    return sortByAge(a, b);
  }
}

sortByAge = function (a, b){
  return b.age - a.age;
}

console.log(students.sort(sortByName));

