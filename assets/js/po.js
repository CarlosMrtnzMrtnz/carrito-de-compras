urlApi = 'https://pokeapi.co/api/v2/pokemon'

const obtenerPokemon = async() => {
let tarjetasHtml = document.querySelector("#contenedor")
try {
    const datosPokemon = await fetch(urlApi)
    const dataApi = await datosPokemon.json()
    const resultado = dataApi.results
   

   resultado.forEach(async (pokemon) => {
   const iteracion = await fetch(pokemon.url)
   const iteracions = await iteracion.json()
   console.log("🚀 ~ file: po.js:15 ~ resultado.forEach ~ iteracions:", iteracions.name)
   console.log("🚀 ~ file: po.js:14 ~ resultado.forEach ~ iteracion:", iteracions.sprites.other.dream_world.front_default
   )
tarjetasHtml.innerHTML += `
    <div class="col-3">
        <div class="card">
        <img src="${iteracions.sprites.other.dream_world.front_default}" class="card-img-top " alt="...">
        <div class="card-body d-flex justify-content-center">
            <h5 class="card-title ">${iteracions.name}</h5>
        </div>
        </div>
    </div>` 

   
    
       });
    
    
} catch (error) {

}


}

obtenerPokemon()
