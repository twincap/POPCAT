const cat = document.getElementById("cat");
const score = document.getElementById("score");
let sc = 0;

function onMouseUp() {
    cat.src = "./assets/img/normal.png";
}

function onMouseDown() {
    cat.src = "./assets/img/waaaa.png";
    const audio = new Audio("./assets/img/pop.mp3");
    audio.play();
    
    // Increase the score and update the display
    sc++;
    score.innerText = sc;

    // Move the cat image upward
    const currentTop = parseInt(cat.style.top) || 0;
    const newTop = currentTop - 10; // You can adjust the value as needed
    cat.style.top = newTop + "px";
}

cat.addEventListener("mouseup", onMouseUp);
cat.addEventListener("mousedown", onMouseDown);
