let valores =[1, 4, 9, 76, 33, 55]
/*
for (let c = 0; c < valores.length;c++){
    console.log(`Vetor ${c}: ${valores[c]}`)
}*/

for (let c in valores){           //Para cada posição em valores mostre o elemento
    console.log(`A posição ${c} tem o valor: ${valores[c]}`)
}
