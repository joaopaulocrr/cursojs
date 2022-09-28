var classe = document.querySelector("div.container")

var hour = document.getElementById('hora')

const zeroFill = n => {
    return ('0' + n).slice(-2);
}

 const interval = setInterval(() => {
var horas = new Date()
var horario = `${zeroFill(horas.getHours())}:${zeroFill(horas.getMinutes())}:${zeroFill(horas.getSeconds())}`
hour.innerHTML = `Agora são ${horario} horas`
}, 1000);

let ho = new Date()
let horr = ho.getHours()
let corpo = document.body
let imagem = document.getElementById('img')
let titulo = document.getElementsByTagName('h1')[0]

if(horr <= 12){
    corpo.style.background='lightblue'
    imagem.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763__340.jpg")'
    titulo.style.color = 'red'
}else if(horr <= 18){
    corpo.style.background='yellow'
    imagem.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/03/30/13/01/sun-3275314__340.jpg)'
    titulo.style.color = 'black'
}else{
    corpo.style.background = 'black'
    imagem.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg)'
}

