"use strict"





const todoIdTextbox = document.getElementById("todoIdTextbox")
const submitButton = document.getElementById("submitButton")
const resultsOutput = document.getElementById("resultsOutput")
const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/"




window.onload = () => {
    submitButton.onclick = onSubmitButtonClick;
}

function onSubmitButtonClick() {
    resultsOutput.innerHTML = "";

    let actualUrl = apiBaseUrl + todoIdTextbox.value;

    fetch(actualUrl) .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(let d in data){
            if(d != "userId") {
                resultsOutput.appendChild(createParagraph(`${d} : ${data[d]}`))
            }
            
        }
    })

}

function createParagraph(content) {
    let p = document.createElement("p");
    p.innerHTML = content;
    p.classList.add("h4");
    return p;
}