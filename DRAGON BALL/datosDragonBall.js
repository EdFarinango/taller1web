const consultarGif =(id, number)=>{
    id = document.getElementById('basic-url').value;
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=zTun8iyyB7b7eeI8ItaJgouEdMMR1rTM&tag=${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        //console.log(data);
        pintarPokemon(data,number)
      })
      .catch((error) => {
        console.log(error);
      });
};
const btnSeleccionar = () => 
{

  let segundoDB = Math.round(Math.random() * 150);

  consultarGif(segundoDB,2);
};

btnSeleccionar()
const lista = document.getElementById("listarpokemon")
const pintarPokemon = (data, id) =>
{
  let item = lista.querySelector(`#pok-${id}`);
  item.getElementsByTagName("img")[0].setAttribute("src", data.data.images.original.url);
  console.log(data.data.embed_url)
  item.getElementsByTagName("p")[0].innerHTML = data.data.title;
}







// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1