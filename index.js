const canvas = document.querySelector('canvas')
const score = document.getElementById('score')
canvas.width = 300
canvas.height = 300

const context = canvas.getContext('2d')


let playerX = 20
let playerY = 20
let baseX = Math.floor(Math.random() * 250)
let baseY = Math.floor(Math.random() * 250)


//functions
function step() {
    context.clearRect(0, 0, 300, 300)
        //player dot
    context.fillStyle = '#E63462'
    context.fillRect(playerX, playerY, 10, 10)
        //winning square
    context.strokeRect(baseX, baseY, 50, 50)
        //takes function as an arg to refresh page

    if (playerX >= baseX &&
        playerY >= baseY &&
        playerX <= baseX + 50 &&
        playerY <= baseY + 50) {
        baseX = Math.floor(Math.random() * 250)
        baseY = Math.floor(Math.random() * 250)

        //score counter
        getWinner()
    }

    requestAnimationFrame(step)
}
requestAnimationFrame(step)

let count = 0;

function getWinner() {
    count += 1
    console.log(count)
    score.innerHTML = count
}

function handleInput(event) {
    let key = event.key
    if (key === 'a') {
        playerX -= 5
    } else if (key === 'w') {
        playerY -= 5
    } else if (key === 'd') {
        playerX += 5
    } else if (key === 's') {
        playerY += 5
    }
}

//event listeners
document.addEventListener('keypress', handleInput)