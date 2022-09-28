var agora = new Date() 
hora = agora.getHours()+":" + agora.getMinutes()+":" + agora.getSeconds()
var data = agora.getDate() + '/' + (agora.getMonth()+1)+ '/' + agora.getFullYear()


if(hora==1){
   console.log ('É ' + hora + ' hora da manhã ' + data +'.')
}else if(hora >= 2 && hora <= 12){
    console.log ('São ' + hora + ' horas da manhã ' + data +'.')
}else if (hora > 12 && hora <= 18){
    console.log ('São ' + hora + ' horas da tarde.' + data +'.')
}else{
    console.log ('São ' + hora + ' horas da noite de ' + data +'.')
}

var dia = agora.getDay()
switch(dia){
    case 0:
        dia='Domingo'
        break
    case 1:
        dia='Segunda-Feira'
        break
    case 2:
        dia='Terça-Feira'
        break
     case 3:
        dia='Quarta-Feira'
        break
    case 4:
        dia='Quinta-feira'
        break
    case 5:
        dia='Sexta-feira'
        break
    case 6:
        dia='Sábado'
}
console.log(dia)


if (hora >= 5 && hora <= 12){
    console.log ('Muito bom dia!!!')
}else if(hora > 12 && hora <= 18){
    console.log('Muito boa tarde!!!')
}else{
    console.log('Muito boa noite!!!')
}