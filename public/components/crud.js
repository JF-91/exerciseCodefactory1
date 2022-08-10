

const crud = ()=>{

    let fragment = document.createDocumentFragment();
    let container = document.querySelector(".contenedor-crud");
    let templateContainer = document.querySelector(".template-crud").content; 


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '981aa13f55msh281051d367c19c0p181c4fjsn3ae3a015c334',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    

}


module.exports = crud;

/* 
<template class="template-crud">
        <form>
          <div class="mb3">
            <label class="form-label" for="">add</label>
            <input class="input-liryc form-control form-control-lg" type="text" name="title" id=${id} placeholder="add data">
            <button type="submit" class="">submit</button>
          </div>
        </form>

        <div>
          <ul class="list-group">
            <li class="list-group-item"></li>
          </ul>
        </div>

      </template>
*/