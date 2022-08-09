
const apiFech = () =>{
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'RwY-1lN6S6l3ukidpTDvX_M7Pyr8n29UdTUo8ALOHq58uXc8eZAq_tQ1ey6wPoSF',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };
    
    fetch('https://genius-song-lyrics1.p.rapidapi.com/search?q=Alan%20Walker&per_page=10&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        
}

module.exports = apiFech;