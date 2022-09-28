let num =[5, 8, 9, 2]
num.sort()
console.log (`Nosso vetor é o ${num}`)
num[4] = 10
console.log (`Nosso vetor é o ${num}`)
num.push(12)
console.log (`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)

let pos = num.indexOf(9)
console.log('O valor 9 está na posição '+ pos) 