function sendToWhatsapp(){
    let numeroTel = "+5527981589888";


    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    let textoNome = ""
    let textoEmail = ""
    let textoMensagem = ""
    if(nome != ""){
         textoNome = "Nome:" + nome + "%0a"
    }
    if(email != ""){
        textoEmail = "E-mail:" + email + "%0a"
    }
    if(mensagem != ""){
        textoMensagem = "Mensagem:" + mensagem + "%0a"
    }

    var url = "https://wa.me/" + numeroTel + "?text="
        + textoNome
        + textoEmail
        + mensagem

    window.open(url, '_blank').focus();


}