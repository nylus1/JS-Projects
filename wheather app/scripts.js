let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Función para obtener detalles meteorológicos de la API y mostrarlos
let getWeather = () => {
  let cityValue = cityRef.value;
//Si el campo de entrada está vacío
if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Intrudice el nombre de la ciudad</h3>`;
  }
//Si el campo de entrada NO está vacío
else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang=sp`;
    //Borrar el input field
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //Si el nombre de la ciudad es válido
      .then((data) => {
        //Pasamos todo por consola
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        //Construir html con los datos obtenidos
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      //Si no lo es
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Ciudad no encontrada</h3>`;
      });
  }
};
//Pillar click en el boton
searchBtn.addEventListener("click", getWeather);
//Pablo chupame la pinga
window.addEventListener("load", getWeather);