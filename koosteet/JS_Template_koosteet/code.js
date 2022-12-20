getAppliances();

//1 Tee map-funktiolla taulu, joka sisältää hinnat 60% alennuksella.
let prices = [200, 450, 234, 430, 670, 500, 150];




let ale = prices.map(price => price * 0.6);
console.log(ale);




//2 Tee map-funktiolla toinen taulukko, jossa on jokaista 
//yli 200e hintaa kohden teksti "kallis" ja lopuissa teksti "halpa"

let kuvaukset = prices.map(price => price>200 ? "kallis" : "halpa" );
console.log(kuvaukset);


//4 Tee filter-funktiolla taulu, jossa on vain 300:aa halvemmat hinnat.
let alle = prices.filter(price => price <300);
console.log(alle);

//5 Suodata taulukosta vain ne nimet, joissa on kirjaimia 6 tai enemmän (length)
let names = ["John", "Lisa", "Marco", "Elizabeht", "Gunther", "Eveliina", "Risto-Matti", "Marko", "Eijastiina"];

let nimet = names.filter(name => name.length >=6);
console.log(nimet); 


function showAppliances(gadgets){
    //6 Funktion parametrina on taulukko, joka sisältää laitteiden nimiä
    //Tulosta nimistä lista tälle sivulle ul-luettelon sisään.
    let ul = document.querySelector("ul");
    for ( gadget of gadgets) {
        let li = document.createElement("li");
        li.textContent = gadget;
        ul.appendChild(li);
    }
}


function getAppliances(){
    fetch("https://random-data-api.com/api/v2/appliances?size=100")
        .then(resp => resp.json())
        .then(data => showAppliances(data.map(a => a.equipment)))
}


