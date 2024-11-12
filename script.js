let counter = document.querySelector(".counter");
let container = document.querySelector(".container");

window.onload = function() {
    // Your DOM manipulation code here
    container.textContent = "";
    nSquares = 16;
    for ( let n = 0 ; n < nSquares; n++){
        let row = document.createElement("div");
        row.style = "background: blue";
        row.style = "display: flex";
        row.style.flexGrow = "1"
        for(let i = 0; i< nSquares; i++){
            let element = document.createElement("div");
            element.style = "background: blue";
            element.style = "flex: 1 1 0";
            row.appendChild(element);
            element.addEventListener("mouseenter",()=>{
                element.style.backgroundColor = getRandomColor();
            });
            element.addEventListener("mouseleave",()=>{
                element.style.backgroundColor = getRandomColor();
            });
        }
        container.appendChild(row);
    }
};
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let squareDeployer = ()=>{
    container.textContent = "";
    nSquares = parseInt(prompt("Enter the Number of element per column and row"));
    for ( let n = 0 ; n < nSquares; n++){
        let row = document.createElement("div");
        row.style = "background: blue";
        row.style = "display: flex";
        row.style.flexGrow = "1"
        for(let i = 0; i< nSquares; i++){
            let element = document.createElement("div");
            element.style = "background: blue";
            element.style = "flex: 1 1 0";
            row.appendChild(element);
            element.addEventListener("mouseenter",()=>{
                element.style.backgroundColor = getRandomColor();
            });
            element.addEventListener("mouseleave",()=>{
                element.style.backgroundColor = getRandomColor();
            });
        }
        container.appendChild(row);
    }
};
counter.addEventListener("click",()=> {
    squareDeployer();
});

