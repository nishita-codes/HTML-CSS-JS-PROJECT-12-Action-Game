console.log("Welcome to Action Game");

document.onkeydown = function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
}
if(e.keyCode == 37){
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
    dino.style.left = dinoX - 112 + "px";
}
};

setInterval(() =>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino , null).getPropertyValue('top'));

    ox = window.getComputedStyle(obstacle  , null).getPropertyValue('left');
    oy = window.getComputedStyle(obstacle  , null).getPropertyValue('top');

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX < 73 && offsetY < 52){
        gameOver.style.visibility = "visible";
        obstacle.classList.remove('obstacleAni');
    }
    
}, 10);