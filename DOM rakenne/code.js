let harj1 = document.querySelector("#content");
console.log(harj1.tagName);

let harj2 =document.querySelector(".basic");
console.log(harj2.tagName);

let harj3 = document.querySelector("li");
console.log(harj3.textContent);

let harj4 = document.querySelector("ul :last-child");
console.log(harj4.textContent);


    
let bodyDesc = document.querySelectorAll("body *");


for (elem of bodyDesc ) 
console.log(elem.nodeName);
    



    

let harj6 = document.querySelectorAll("article p");
for (teksti  of harj6) {
    console.log(teksti.textContent);



}
let listItems = document.querySelectorAll("ul>li");

for (li of listItems) {
    li.textContent= "John Doe"
    
}


let harj4Elems = document.querySelectorAll("#content *");

for(elem of harj4Elems){
    if(elem.textContent.length > 10){
        console.log(elem.nodeName);
    }
}



