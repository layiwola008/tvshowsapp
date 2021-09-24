//http://api.tvmaze.com/search/shows

const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = {params: {q : searchTerm}};
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data)

});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img)
    }
  }
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


// const container = document.querySelector('#container')

// const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"



// for(let i = 1; i <= 151; i++){
// const newImg = document.createElement('img')

// const pokemon = document.createElement('div')
// pokemon.classList.add('pokemon');
// const label = document.createElement('span')
// label.innerText = `${i}`
// newImg.src = `${baseURL}${i}.png`

// container.appendChild(pokemon)
// pokemon.appendChild(label)
// pokemon.appendChild(newImg)
// }



