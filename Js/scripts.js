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

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    return {
      add: add,
      getAll: getAll
    };
  })();

let big = 'wow, that is big! ';
//not best practice, I just used it to experiment a bit!
big = big.fontcolor('black');
big = big.fontsize('80px');

/* let output = '';
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


pokemonRepository.getAll().forEach (pokemon);

function pokemon (item) {
  document.write(item.name + ' (' + item.height + ') ');
  if(item.height >0.6){
    document.write(big)
  }
}
