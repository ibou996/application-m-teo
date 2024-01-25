let ville = "Dakar";
recevoirTemperature(ville);

let btnchangerVille = document.querySelector('#changer');

btnchangerVille.addEventListener('click', () => {
    ville = prompt("Quelle ville Souhaiter vous voir ?");
    recevoirTemperature(ville);
})


 function recevoirTemperature(ville) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=9e18c4a89473275664f2e2a07594b716&units=metric';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse     = requete.response;
            let temperature = reponse.main.temp;
            let ville       = reponse.name;
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent             = ville;
        }
        else{
            alert('Un probléme est intervenu, merci de revenir plus tard.')
        }
        
    }
    
}
}