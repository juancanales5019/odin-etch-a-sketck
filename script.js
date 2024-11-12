let counter = document.querySelector(".counter");
let container = document.querySelector(".container");
// function to display x amount of div squares
let displayXSquares = (nSquares)=>{
    container.textContent = "";
    for ( let n = 0 ; n < nSquares; n++){
        let row = document.createElement("div");
        row.style = "background: blue";
        row.style = "display: flex";
        row.style.flexGrow = "1"
        row.style.border = "0";
        row.style.borderRadius = "0"
        for(let i = 0; i< nSquares; i++){
            let element = document.createElement("div");
            element.style = "background: blue";
            element.style = "flex: 1 1 0";
            element.style.backgroundColor = "skyblue"
            element.style.borderRadius = "0";
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
// function to deploy 16 by 16 div squares onload
window.onload = function() {
    // Your DOM manipulation code here
    displayXSquares(16);
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
// function to generate user x by x squares on container
let squareDeployer = ()=>{
    container.textContent = "";
    userInput = parseInt(prompt("Enter the Number of element per column and row"));
    displayXSquares(userInput);
};
// Call the squareDeployer when user click and choose a number
counter.addEventListener("click",()=> {
    squareDeployer();
});

