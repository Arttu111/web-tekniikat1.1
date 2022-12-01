let nappi = document.querySelector("button");
let buttonSize = 50;
nappi.style.width = buttonSize + "px";

nappi.addEventListener("click", clickButton);
nappi.addEventListener("mouseenter", mouseEnter);
nappi.addEventListener("mouseleave", mouseLeave);




function clickButton(){

    document.body.style.backgroundColor ="yellow";
    buttonSize += 10;
    nappi.style.width = buttonSize + "px";
}


function mouseEnter(){
nappi.innerText= "terve";

}

function mouseLeave(){
    nappi.innerText = "hellou";
}
