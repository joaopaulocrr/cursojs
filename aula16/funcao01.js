let valores = [1, 2, 5, 8, 9]
var s = 0
function soma(vet){
    
    for(var c = 0 ;c < vet.length;c++){
        s += vet[c]
    }
   return s
}
console.log(soma(valores))



/*function parimp(n){
    if(n % 2 == 0){
        return `O número ${n} é PAR`
    }else{
        return `O número ${n} é ÍMPAR`
    }
}
//console.log(parimp(7))
 res = parimp(7)          //Das duas formas funciona.
 console.log(res)*/