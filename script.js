let counter = document.querySelector(".counter");
let container = document.querySelector(".container");

counter.addEventListener("click",()=> {
    container.textContent = "";
    nSquares = parseInt(prompt("Enter the Number of element per column and row"));
    for ( let n = 0 ; n < nSquares; n++){
        let row = document.createElement("div");
        row.style = "background: blue";
        row.style = "display: flex; flex: auto";
        for(let i = 0; i< nSquares; i++){
            let element = document.createElement("div");
            element.style = "background: green width: 10px, height: 10px";
            row.appendChild(element);
        }
        container.appendChild(row);
    }
});