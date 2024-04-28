const buttonAPI = document.getElementById("buscar");
const textAPI = document.getElementById("textAPI");
const result = document.getElementById("resultado")

async function searchAPI(text) {
  try {
    const request = await fetch(
      `https://weather-api-t17v.onrender.com/weather/${text}`
    );
    const data = await request.json();
    printHTML(data)
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Ya Esta");
  }
}

const printHTML = (data) => {
    const fechaActual = new Date();
    const options = { weekday: 'long' };
    const nombreDia = fechaActual.toLocaleDateString('es-ES', options);
    result.innerHTML = `
    <div> 📅 Dia de la Semana : </br> <h3>${nombreDia}</h3> </div>
    <div> 🌡️Temperatura : </br> <h3>${data.temperature}</h3></div>
    <div> 🏙️Ciudad : </br> <h3>${textAPI.value}</h3></div>
    <div> 🌪️Viento : </br> <h3>${data.wind}</h3></div>
    `
}

buttonAPI.addEventListener('click',()=>searchAPI(textAPI.value))
textAPI.addEventListener('keydown',(event)=>event.key==='Enter'? searchAPI(textAPI.value):null)
