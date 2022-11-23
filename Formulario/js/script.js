function buscaCep() {
    let cep = document.getElementById('cep').value;

    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v2/" + cep;
        
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        // Tratar a resposta da requisição 
        req.onload = function() {
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
            }
            else if(req.status === 404) {
                window.alert("Cep Invalido");
            }
            else {
                window.alert("Erro ao fazer a requisição");
            }
        }
    }
}



/* Evento */
window.onload = function() {
    let txtcep = document.getElementById("cep");
    txtcep.addEventListener("blur", buscaCep)
}

