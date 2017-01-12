var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];
//Select 'select' element to append options to
var selectList= document.getElementById('pickaplanet');
//Run through for loop and create option element for each planet
for(i = 0; i < planets.length; i++){
  var newOption = document.createElement("option");
  newOption.innerText = planets[i].planet
  selectList.appendChild(newOption);

};
//Select the button
var button = document.getElementById('button')
//Define function to calculate weight
function runcalculation() {
  //Select the user's weight
var weight = document.getElementById('weight').value;
//Select the specific planet's gravity
var pindex= document.getElementById('pickaplanet').selectedIndex;
var pweigt= planets[pindex].gravity;
var planetpick = planets[pindex].planet;
//give results
console.log(weight);
console.log(planetpick);
var whatyouweigh = pweigt * weight;
var output = document.createElement('p');
output.innerText = "on " + planetpick + " you weigh " + whatyouweigh;
button.appendChild(output)
};






