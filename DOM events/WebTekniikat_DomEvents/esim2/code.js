let button = document.querySelector("button");
let form = document.getElementById("lomake");


form.addEventListener("submit", addUsername);

document.getElementById("show").addEventListener("click", showAll);
/**
 * 
 * @param {Event} event 
 */
function addUsername(event){
    event.preventDefault();

    let formData = new FormData(form);
    let username = formData.get("username");


   

}

function showAll(){
    for (const user of users) {
        
        let h = document.createElement("h3");
        h.textContent = user;
        document.body.appendChild(h);
    }
}