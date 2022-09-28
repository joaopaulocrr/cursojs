
function clicar() {
   var ano = document.getElementById("data").value     //recebe a data de nascimento
   var anoD = new Date()
   var anoAtual = anoD.getFullYear()           //ano em que estamos
   var msg = document.getElementById("msg")     // resposta que vai apareceer na tela   //recebe o sexo feminino

   if (ano <= 0 || ano < 1900 || ano > anoAtual) {
      alert("OPÇÃO INVÁLIDA!!! VERIFIQUE OS DADOS E TENTE NOVAMENTE!!!")
   } else {
      var sexo = document.getElementsByName('sexo')
      var idade = (anoAtual - ano)
      var genero = ""
      var img = document.createElement('img') //Cria um elemento img no html
      img.setAttribute('id', 'foto')          //Adiciona um id na tag(elemento) que foi criado
      if (sexo[0].checked) {                 //Se sexo na posição 0 for checado
         genero = 'Homem'
         if (idade >= 0 && idade < 5) {
            msg.innerHTML = `Detectamos um bebe de ${idade} ano(s) de idade`
            img.setAttribute('src', 'bebe.jpg')
         } else if (idade < 14) {
            msg.innerHTML = `Detectamos uma criança de ${idade} anos de idade`
            img.setAttribute('src', 'menino.jpg')
         } else if (idade <= 18) {
            msg.innerHTML = `Detectamos um adolescente de ${idade} anos de idade`
            img.setAttribute('src', 'adolescente-h.jpg')
         } else if (idade <= 50) {
            msg.innerHTML = `Detectamos um homem de ${idade} anos de idade`
            img.setAttribute('src', 'homem.jpg')
         } else if (idade > 50) {
            msg.innerHTML = `Detectamos um idoso  de ${idade} anos de idade`
            img.setAttribute('src', 'idoso.jpg')
         }
      } else if (sexo[1].checked) {           //Se sexo na posição 1 for checado
         genero = "Mulher"
         if (idade >= 0 && idade < 5) {
            msg.innerHTML = `Detectamos um bebe de ${idade} ano(s) de idade`
            img.setAttribute('src', 'bebe.jpg')
         } else if (idade < 14) {
            msg.innerHTML = `Detectamos uma criança de ${idade} anos de idade`
            img.setAttribute('src', 'menina.jpg')
         } else if (idade <= 18) {
            msg.innerHTML = `Detectamos uma adolescente de ${idade} anos de idade`
            img.setAttribute('src', 'adolescente-m.jpg')
         } else if (idade <= 50) {
            msg.innerHTML = `Detectamos uma mulher de ${idade} anos de idade`
            img.setAttribute('src', 'mulher.jpg')
         } else if (idade > 50) {
            msg.innerHTML = `Detectamos um idoso  de ${idade} anos de idade`
            img.setAttribute('src', 'mulher idosa.jpg')
         }
      }
      msg.style.textAlign = 'center'            //centraliza 
      msg.appendChild(img)                   //mostra o elemento imagem que foi criado no Javascript
   }

   /* if(idade >= 0 && idade < 5){
       msg.innerHTML = `Detectamos um bebe de ${idade} ano(s) de idade`
      
    }else if(idade < 14){
       msg.innerHTML = `Detectamos uma criança de ${idade} ano(s de idade)`
       
    }else if(idade <= 18){
       msg.innerHTML = `Detectamos um adolescente de ${idade} ano(s de idade)`
 
    }else if(idade <= 50){
       msg.innerHTML = `Detectamos um homem de ${idade} ano(s de idade)`
 
    }else if (idade > 50){
       msg.innerHTML = `Detectamos um idoso  de ${idade} ano(s de idade)`
 
    }*/
}





