
// onclick javascriptin puolella ei html. Queryselectorilla haetaan button htmlstä
let button = document.querySelector("button");


//eri komentoja "wheel" & "click"
button.addEventListener("click", OkClicked);
button.addEventListener("wheel", Wheel);

//"click function" alert + width kasvaa
function OkClicked(){
    //inline style
    button.style.width = "500px";
    alert("hello world")

}


//wheel function hiiren rulla ottaa clickin
function Wheel(event){
    //wheel event deltaY katsoo mihin suuntaan rullaa pyöritetään
    console.log(event.deltaY);
    console.log("wheel");
}
