var person = {
  name: "Sehar",
  country: "USA",
  age: 5, 
  treehouseStudent: true, 
  skills: ['JavaScript', 'HTML', 'CSS']
};

for(var key in person){
  console.log(person[name]);
}


// function print(message) {
//   var div = document.getElementById('output');
//   div.innerHTML = message;
// }

// var message = '<p> My name is ' + person.name + '</p>';
// print(message);
// //console.log(person);