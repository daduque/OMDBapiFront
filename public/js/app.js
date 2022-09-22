document.addEventListener('DOMContentLoaded', (event) => {

    const searchBtn = document.querySelector('#searchBtn');
    const searchMovie = document.getElementById('searchMovie');

    const arraySearch = [];

    searchBtn.addEventListener('click', (e) => {
        if(!(searchMovie.value.trim() === '')) {
            arraySearch.unshift(searchMovie.value);


        fetch('http://www.omdbapi.com/?t='+searchMovie.value+'&apikey=23daade9&type=movie')
        .then(response => response.json())
        .then(data => {

            const searchResults = document.querySelector('#searchResults');
            const div = document.createElement('DIV');
            div.classList.add('col-3');
            div.innerHTML = `
                <h3>${data.Title}</h3>
                <img width=200 src="${data.Poster !== 'N/A'? data.Poster : 'https://www.placeimg.com/200/300/any'}" alt="">
                <p>${data.Plot}</p>
                <h4>${data.Director}</h4>
                <p>${data.Genre}</p>
            `;
            if(searchResults.children.length <= 1){
                searchResults.appendChild(div);
            }else{
                searchResults.insertBefore(div, Array.from(searchResults.children)[1]);
            }
           
            console.log(searchResults);
        });
    }
    });

});

/*
agregamos un escuchador de eventos de un botón -> click
crear un selector para que reciba los datos del buscador y almacenarlos en una variable
Concatenarlos en la url de la api
*/ 