let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';



  function addListItem(pokemon) {
    let pokemonListing = document.querySelector('.pokemonList');

    //create li and button
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    //change text of button and add class "pokemonButton"
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton','show-modal');
    //attach them to the ul/li respectively
    listItem.appendChild(button);
    pokemonListing.appendChild(listItem);

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



  //add modal, start:
  let modalContainer = document.querySelector('#modal-container');
  let modalField = document.querySelector('#modal-container.is-visible');

  function showModal(pokemon) {


    //clear modal of text
    modalContainer.innerHTML ='';

    let modal = document.createElement('div');
    modal.classList.add('modal');
    let closeButtonElement = document.createElement('button');

    //add new modal content
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'x';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl;

    let contentElement = document.createElement('p');
    contentElement.innerText = ('Height: ') + pokemon.height + ('\n') + ('Weight: ') + pokemon.weight;


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');

  }

  window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

  modalContainer.addEventListener('click', (e) => {
      //only close when user clicks directly on overlay not inside modal
      let target = e.target;
      if (target === modalContainer){
        hideModal();
      }
    });
  // end modal



//access outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
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
