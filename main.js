// let body, box, canvas, poster, random
// body = document.body
// poster = document.createElement('div')
// poster.setAttribute('id', 'poster')
// body.prepend(poster)
// canvas = document.createElement('div')
// canvas.setAttribute('id', 'canvas')
// poster.prepend(canvas)

// box = 160
// random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function colors() {
//     return getComputedStyle(document.documentElement).getPropertyValue('--clr' + random(1, 5) + '')
// }
// for (let i = 0; i < box; i++) {
//     let span = document.createElement('span')
//     span.style.left = random(-5, 100) + "%"
//     canvas.prepend(span)
// }

// function randomFull() {
//     for (let d = 0; d < document.querySelectorAll('span').length; d++) {
//         let span = document.querySelectorAll('span')[d]
//         span.style.background = "linear-gradient(" + colors() + ", transparent)"
//         span.style.height = random(8, 96) + "%"
//         span.style.opacity = '0.' + random(1, 9)
//         span.style.transform = "translate(1." + random(0, 9) + "vmin, 0)"
//     }
// }

// poster.onclick = randomFull;
// // setInterval(randomFull, 1000);
// window.requestAnimationFrame(randomFull); Old version

var s = window.screen;  //Переменная для выясняющая размер вашего экрана 
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var draw = function () {
  q.getContext('2d').fillStyle='rgba(0,0,0,.05)'; //Тут цвет фона
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='#0F0'; //Тут цвет букв
  letters.map(function(y_pos, index){
  text = String.fromCharCode(65+Math.random()*33);
  x_pos = index * 10;
  q.getContext('2d').fillText(text, x_pos, y_pos);
  letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
  });
};
setInterval(draw, 33);
