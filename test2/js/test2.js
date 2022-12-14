// var byline = document.getElementById('byline');   // Find the H2
// bylineText = byline.innerHTML;                    // Get the content of the H2
// bylineArr = bylineText.split('');                 // Split content into array
// byline.innerHTML = '';                            // Empty current content

// var span;         // Create variables to create elements
// var letter;

// for(i=0;i<bylineArr.length;i++){                  // Loop for every letter
//   span = document.createElement("span");          // Create a <span> element
//   letter = document.createTextNode(bylineArr[i]); // Create the letter
//   if(bylineArr[i] == ' ') {                       // If the letter is a space...
//     byline.appendChild(letter);         // ...Add the space without a span
//   } else {
//     span.appendChild(letter);           // Add the letter to the span
//     byline.appendChild(span);           // Add the span to the h2
//   }
// }

 
// Variables Planets
const ctnPlanets = document.getElementById("ctn-main");
const planetsPrevious = document.getElementById("planets-previous");
const planetsNext = document.getElementById("planets-next");

let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;

planetsPrevious.addEventListener("click", pagePreviousPlanets);
planetsNext.addEventListener("click", pageNextPlanets);

// Functions Planets
async function fetchPlanets() {
  document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Planets);
  const data = await results.json();
  nextPlanets = data.next;
  previousPlanets = data.previous;
  let planets = data.results;
  let outPut = ' ';
  document.querySelector('.overlay').classList.remove('active');
  planets.forEach(item => {
    outPut += `<div class="card card-planet">
                  <h2>${item.name}</h2>
                  <h5>Climate: ${item.climate}</h5>
                  <h5>Terrain: ${item.terrain}</h5>
                  <h5>Population: ${item.population}</h5>
               </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextPlanets() {
  if(nextPlanets) {
    URL_Planets = new URL(nextPlanets);
  }
  fetchPlanets()
    .then(response => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousPlanets() {
  if(previousPlanets) {
    URL_Planets = new URL(previousPlanets);
  }
  fetchPlanets()
    .then(response => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

