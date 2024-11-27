const size = 50;

function createObject(x, y, color) {
    const object = document.createElement("div");
    const style = object.style;
    style.width = size + "px";
    style.height = size + "px";
    style.left = x + "px";
    style.top = y + "px";
    style.background = color;
    style.position = "absolute";
    document.body.appendChild(object);
    return object;
}

let snake = []
let apple = createObject(500, 500, "darkgreen");

for (let i = 0; i < 4; i++) {
    let object = createObject(300 + size * i, 300, "black");
    snake.push(object);
}

let dirX = 0;
let dirY = 0;

window.addEventListener('keydown', (event) => {
    if (event.key == "w" || event.key == "ц") {
        dirY = -1;
        dirX = 0;
    }
    if (event.key == "s" || event.key == "ы") {
        dirY = 1;
        dirX = 0;
    }
    if (event.key == "a" || event.key == "ф") {
        dirY = 0;
        dirX = -1;
    }
    if (event.key == "d" || event.key == "в") {
        dirY = 0;
        dirX = 1;
    }
})


setInterval(() => {
    if (!(dirX == 0 && dirY == 0)) {
        for (let i = snake.length - 1; i > 0; i--) {
            snake[i].style.left = snake[i - 1].style.left;
            snake[i].style.top = snake[i - 1].style.top;
        }
        let coordX = Number(snake[0].style.left.replace("px", ""));
        let coordY = Number(snake[0].style.top.replace("px", ""));
        coordX = coordX + size * dirX;
        coordY = coordY + size * dirY;
        snake[0].style.left = coordX + "px";
        snake[0].style.top = coordY + "px";
        if (snake[0].style.left == apple.style.left &&
            snake[0].style.top == apple.style.top) {
            const x = - size;
            const y = - size;
            const object = createObject(x, y, 'black')
            snake.push(object);
            apple.style.left = Math.floor(Math.random() * 15) * size + "px";
            apple.style.top = Math.floor(Math.random() * 15) * size + "px";
        }

    }
}, 200)



