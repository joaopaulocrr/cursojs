var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var s = 0
for(var c = 1; c <= Number(vetor.length); c++){
     s = s + Number(vetor[c])
   
}
console.log (Number(s))







//FUNÇÃO RECURSIVA

/*function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
    
}
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
n! = n x (n-1)!                 O fatorial de n é sempre n vezez fatorial de n menos 1
1! = 1                             A não ser que seja 1, pois o resultado sempre será um

*/