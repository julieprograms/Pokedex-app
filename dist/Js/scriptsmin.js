let pokemonRepository=function(){let e=[],t='https://pokeapi.co/api/v2/pokemon/?limit=151';function n(e){l(e).then(function(){i(e)})}function o(t){'object'==typeof t&&e.push(t)}function l(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.weight=t.weight,e.types=[];let n=t.types;for(let t=0;t<n.length;t++)e.types.push(' '+n[t].type.name)}).catch(function(e){console.error(e)})}function i(e){let t=document.querySelector('.modal'),n=document.querySelector('.modal-header'),o=document.querySelector('.modal-title'),l=document.querySelector('.modal-body');t.classList.add('text-center','border-0','mb-1'),n.classList.add('text-center','bg-danger','text-light'),l.classList.add('pb-5'),o.innerHTML='',l.innerHTML='';let i=document.createElement('h2');i.innerText=e.name;let r=document.createElement('img');r.src=e.imageUrl,r.classList.add('img-fluid'),r.setAttribute('style','width:50%;');let d=document.createElement('p');d.innerText='Height: '+e.height+'\nWeight: '+e.weight;let a=document.createElement('p');a.innerText='Type: '+e.types,o.appendChild(i),l.appendChild(r),l.appendChild(d),l.appendChild(a)}let r=document.querySelector('#search-input');return r.addEventListener('input',()=>{let e=r.value.toLowerCase();document.querySelectorAll('li').forEach(t=>{t.innerText.toLowerCase().includes(e)?t.style.display='block':t.style.display='none'})}),{add:o,getAll:function(){return e},addListItem:function(e){let t=document.querySelector('.layouter'),o=document.createElement('div');o.classList.add('col-md-3');let l=document.createElement('li');l.classList.add('list-group-item','list-unstyled','border-5','border-white','bg-danger','m-1','p-0');let i=document.createElement('button');i.innerText=e.name,i.classList.add('pokemonButton','show-modal','btn','btn-danger','btn-block'),i.setAttribute('data-target','#pokemonModal'),i.setAttribute('data-toggle','modal'),l.appendChild(i),o.appendChild(l),t.appendChild(o),i.addEventListener('click',function(){n(e)})},loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){let t={name:e.name,detailsUrl:e.url};o(t),console.log(t)})}).catch(function(e){console.error(e)})},loadDetails:l,showDetails:n,showModal:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});
