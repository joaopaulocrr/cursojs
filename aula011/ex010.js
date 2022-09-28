
function clicar() {
  var pa = document.getElementById("pais").value
  var resp = document.getElementById('resp')
 resp.innerHTML = `<p>Você mora no(a) <strong>${pa}</strong></p>`
 if(pa=='brasil'){
     resp.innerHTML += `<p>Você é <strong>Brasileiro</strong></p>`
 }else{
     resp.innerHTML += `<p>Você é <strong>Estrangeiro</strong></p>`
 }
  
}

