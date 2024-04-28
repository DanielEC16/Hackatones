const inputCity = document.getElementById("input-city")
const buttonSearch = document.getElementById("button-search")

buttonSearch.addEventListener("click", getWeather)

async function getWeather() {
    try {
        // fetch -> https://goweather.herokuapp.com/weather/cuzco
        // fetch -> https://weather-api-t17v.onrender.com/weather/cuzco

        const url = `https://weather-api-t17v.onrender.com/weather/${inputCity.value}`
        const response = await fetch(url)
        const result = await response.json()
        renderHTML(result)
    }
    catch (error) {
        console.error(error)
        renderError()
    }
    finally {

    }
}

function renderHTML(result){
    // traer el <div id="results"></div>
    const results = document.getElementById("results")
    results.innerHTML= `
        <div>temperatura: ${result.temperature}</div>
    `
    //
}

function renderError(){
    const results = document.getElementById("results")
    results.innerHTML=`Ocurrio un error al consultar la api`
}