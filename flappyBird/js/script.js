let canvas = document.getElementById('canvas').getContext('2d')
// indica um elemento 2d const quadro = canvas.getContext('2d')

let fundo = new BG(0,0,500,900,'img/sky.png')
let fundo2 = new BG(500, 0, 500, 900, 'img/sky.png')
let ground = new GROUND(0,700, 500, 200, 'img/ground.png')
let ground2 = new GROUND(500,700, 500, 200, 'img/ground.png')
let bird = new BIRD(50, 350, 63, 51, 'img/bird0.png')
let pipe1 = new PIPE(500, 500, 96, 358, 'img/pipe1.png')
let pipe2 = new PIPE(500, 0, 96, 358, 'img/pipe2.png')

document.addEventListener('click', function(e){
        bird.speed -= 18
})

function draw(){
    fundo.draw()
    fundo2.draw()
    pipe1.draw()
    pipe2.draw()
    ground.draw()
    ground2.draw()
    bird.draw()
}

function update(){
    fundo.move(7, 500, 0)
    fundo2.move(7, 0, 500)
    pipe1.move(2, -100, 600, 500)
    pipe2.move(2, -100, 600, 5)
    ground.move(3, 500, 0)
    ground2.move(3, 0, 500)

    bird.move()
    bird.animation(7, 3, 'bird')
    bird.limite()
}

function main(){
    canvas.clearRect(0,0,500,900)
    update()
    draw()
    requestAnimationFrame(main)
}

main()