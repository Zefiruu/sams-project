let canvas = document.querySelector(".canvas"),
    context = canvas.getContext("2d"),
    canvasPos = canvas.getBoundingClientRect(),
    clicks = 20000,
    dotCount = 1,
    dotQty = 3,
    dots = {
        1: {
            x: 0,
            y: 0
        },
        2: {
            x: 0,
            y: 0
        },
        3: {
            x: 0,
            y: 0
        },
        4: {
            x: 0,
            y: 0
        },
        5: {
            x: 0,
            y: 0
        },
        6: {
            x: 0,
            y: 0
        }
    };

let lastDot = {
    x: 250,
    y: 250
};

let i = 0, j = 0;
alert('Select the position of the dots, then click "Start"')

function start() {
    i = j;
    dotGeneration();
}

function stop() {
    j = i;
    i = clicks;
}

function dotGeneration() {
    setTimeout(function () {
        i++;
        if(i != 20001) {
            document.getElementById('dotCount').innerHTML = i;
        }
        half(Math.floor(Math.random() * dotQty) + 1);
        if (i < clicks) {
            dotGeneration()
        }
    }, document.getElementById('speedSlider').value)
}

function slider() {
    stop();
    start();
}

function half(selectedDot) {
    let valX = (dots[selectedDot].x - lastDot.x) / 2,
        valY = (dots[selectedDot].y - lastDot.y) / 2;
    context.fillStyle = "#fff";
    context.fillRect(lastDot.x, lastDot.y, 1, 1);
    context.fillRect(lastDot.x + valX, lastDot.y + valY, 1, 1);
    lastDot.x += valX;
    lastDot.y += valY;
}

function draw(event) {
    let dotX = event.clientX - canvasPos.left,
        dotY = event.clientY - canvasPos.top;

    if (dotCount <= dotQty) {
        alert("Selected position " + dotCount);
        context.fillStyle = "red";
        context.fillRect(dotX, dotY, 5, 5);
        dots[dotCount].x = dotX;
        dots[dotCount].y = dotY;
        dotCount++;
        console.log(dotCount);
    }
}