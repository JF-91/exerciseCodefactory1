const { getLyrics, getSong } = require("genius-lyrics-api");


const api = ()=> {

    // let fragment = document.createDocumentFragment();
    // let container = document.querySelector('.api-genius');
    // let templateFragment = document.querySelector('.template-api').content;

    const options = {
        apiKey: 'RwY-1lN6S6l3ukidpTDvX_M7Pyr8n29UdTUo8ALOHq58uXc8eZAq_tQ1ey6wPoSF',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        optimizeQuery: true
    };
    
    getLyrics(options).then((lyrics) => {

        // templateFragment = document.querySelector('div').content = `${lyrics}`
        // const clone = templateFragment.cloneNode();
        // fragment.appendChild(clone);
        // container.appendChild(fragment);


        console.log(lyrics)


    });
    
    getSong(options).then((song) =>

        
    


        console.log(`
        ${song.id}
        ${song.title}
        ${song.url}
        ${song.albumArt}
        ${song.lyrics}`)
    );
    
}

module.exports = {
    api
}




