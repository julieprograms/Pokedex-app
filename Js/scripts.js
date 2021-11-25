let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';


  function addListItem(pokemon) {
    let pokemonListing = document.querySelector('.pokemonList');

    //create li and button
    let layoutRow = document.querySelector('.layouter');
    let layoutContainer = document.createElement('div');
    layoutContainer.classList.add('col-md-4');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'list-unstyled');
    let button = document.createElement('button');
    //change text of button and add class "pokemonButton"
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton' ,'show-modal' , 'btn', 'btn-info', 'btn-block');

    //bootstrap modal:
    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');

    //attach them to the ul/li respectively
    listItem.appendChild(button);
    layoutContainer.appendChild(listItem);
    layoutRow.appendChild(layoutContainer);




    //add Event Listener to Button
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {

      showModal(pokemon);
      console.log(pokemon);

    });
  }



  function add(pokemon) {
    if(typeof pokemon === 'object'){
        pokemonList.push(pokemon);
      }
    }



  function getAll() {
    return pokemonList;
    }



  //fetch api
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }



  //load details for pokemon you clicked on
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  }


//Modal bootstrap
  //add new modal content

  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');
    let modal = document.querySelector('.modal');
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');


    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';

    let titleElement = document.createElement('h2');
    titleElement.innerText = pokemon.name;

    let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl;

    let contentElement = document.createElement('p');
    contentElement.innerText = ('Height: ') + pokemon.height + ('\n') + ('Weight: ') + pokemon.weight;


     modalTitle.appendChild(titleElement);
     modalBody.appendChild(imgElement);
     modalBody.appendChild(contentElement);

     }


       let searchPokemon = document.querySelector('#search-input');
  searchPokemon.addEventListener('input', () =>{
      let value = searchPokemon.value.toLowerCase();
      let pokemonList = document.querySelectorAll('li');
      pokemonList.forEach((pokemon) =>{
          if(pokemon.innerText.toLowerCase().includes(value))
              pokemon.style.display = 'block';
          else
              pokemon.style.display = 'none';
      })
  });


//access outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };

  })();



  //load api into pokemonRepository
  pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
    console.log(pokemon);
  });
});
