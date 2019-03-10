var body = document.querySelector('body');
var container = document.querySelector('.container');
var button = document.createElement('button');
var resetButton = document.createElement('button');
resetButton.innerHTML = "Reset";
resetButton.style.cssText = "padding: 10px; position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%);";
container.appendChild(resetButton);
// button.setAttribute('value', "click me to start");
button.innerHTML = "Click me to start";
button.style.cssText = "padding: 10px; position: absolute; top: 10%; left: 50%; transform: translate(-50%, -50%);";
container.appendChild(button);
button.addEventListener('click', startGame);
resetButton.addEventListener('click', resetDivs);
var num;



function setBodyStyles(){
    body.style.cssText = `padding: 0; margin: 0; box-sizing: border-box; display: grid; height: 100vh; width: 100vw;`;
    container.style.cssText = `display: grid; grid-template-rows: repeat(${num}, 1fr); grid-template-columns: repeat(${num}, 1fr); width: 100%;`
    createDivs();
}




var divArray = [];

function createDivs(){
for(var i = 0; i < num * num; i++){
    var div = document.createElement('div');
    div.style.cssText = "width: 100%; grid-row: [i]; grid-column: [i];";
    container.appendChild(div);
    divArray.push(div);
    console.log(divArray);
}
styleDivs();
};

function styleDivs(){
divArray.forEach(div => div.addEventListener('mouseover', function(){
    var random = Math.floor(Math.random() * 1000000);
    console.log(random);
    div.style.backgroundColor = `#${random}`;
}));
};

function startGame(){
    num = prompt("What size grid would you like?");
    setBodyStyles();
    return num;
}

function resetDivs(){
    divArray.forEach(div => div.style.backgroundColor = "white");
    startGame();
}

