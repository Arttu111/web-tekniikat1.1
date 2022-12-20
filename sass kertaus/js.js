//Kun painiketta painetaan
document.getElementById("addParticipantButton").onclick = 
function(){
 
//Lue syöte
let  participant = document.getElementById("name").value; 
// Luo uusi li-elementti
let newLiElement = document.createElement("li");



// Aseta li-elementti sisällöksi syötetty nimi
newLiElement.innerHTML = participant;

// Lisää li-elementti ul- elementille
document.getElementById("participantList").appendChild(newLiElement);





}
