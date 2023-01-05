function submitForm() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let outputDiv = document.getElementById("output");
    let newMessage = document.createElement("p");
    let currentDate = new Date();
    let dateString = currentDate.getDate() + "." + (currentDate.getMonth() + 1) + "." + currentDate.getFullYear();
    newMessage.innerHTML = dateString + " " + name + " sanoo: " + message;
  
    if (document.getElementById("red-border").checked) {
      newMessage.classList.add("red-border");
    } else {
      newMessage.classList.add("black-border");
    }
  
    outputDiv.appendChild(newMessage);
    }