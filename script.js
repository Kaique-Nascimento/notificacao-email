var texto = document.querySelector('#texto');
var botao = document.querySelector('#botao');
var assunto = document.querySelector('#assunto');
var email = document.querySelector('#email');

botao.addEventListener('click', function(){
    try{
        if(!email.value && !assunto.value && !texto.value) alert("Digite");
        else{
            fetch(`https://ntfy.sh/mensagem`, {
                method: 'POST', // PUT works too
                headers: {
                    'Title' : `${assunto.value}`,
                    'Email': `${email.value}`
                },
                body: `Eu só queria dizer o seguinte: ${texto.value}`,
            });
            alert("Email enviado!");
        }
        }
        
    catch (e){
        alert ("Algo deu errado: "+e);
    }
});