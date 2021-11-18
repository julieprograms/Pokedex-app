let pokemonRepository = (function () {
  let pokemonList = [
    {number: 1,
      name: 'Bulbasaur',
      type: ['grass', 'poison'],
      height: 0.7
    },
    {number: 4,
      name: 'Charmander',
      type: 'fire',
      height: 0.6
    },
    {number: 7,
      name: 'Squirtle',
      type: 'water',
      height: 0.5
    }
  ];

  function addListItem(pokemon) {
    let pokemonListing = document.querySelector('.pokemonList');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton');
    listItem.appendChild(button);
    pokemonListing.appendChild(listItem);

  }



  function add(pokemon) {
    if(typeof pokemon === 'object'){
        pokemonList.push(pokemon);
      }
    }

  function getAll() {
    return pokemonList;
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

let big = '<p class="big">' + 'wow, that is big! ' + '</p>';
/*not best practice, I just used it to experiment a bit!
big = big.fontcolor('black');
big = big.fontsize('80px');

 let output = '';
for(let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].name && pokemonList[i].height) {
    output += pokemonList[i].name + ' (' + 'height: ' + pokemonList[i].height + ') ';
    if(pokemonList[i].height >0.6){
      output += big
    }
  }else if(pokemonList[i].name == true) {
    output += pokemonList[i].name
  }else {document.write('not found')}
}
document.write(output); */

/* used to be:
pokemonRepository.getAll().forEach (pokemon);

function pokemon (item) {
  document.write('<li>' + item.name + ' (' + item.height + ') ');
  if(item.height >0.6){
    document.write(big + '</li>')
  }
  document.write('</li>')
}

*/

pokemonRepository.getAll().forEach (pokemon);

function pokemon(item) {
  return pokemonRepository.addListItem(item);

}
