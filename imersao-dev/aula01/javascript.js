function Converter() {
    var valorElemento = document.getElementById("valor");
    //valor digitado no input
    var elementoValorConvertido = document.getElementById("valorConvertido");
    //valor do h2
    valorElemento = valorElemento.value;//pega oq foi digitado
    var dolar = parseFloat(valorElemento);//transforma em número
  
    var Real = dolar * 5;//dolar para real
    console.log(Real);//printa no console
    var valorConvertido = "O resultado em real é R$ " + Real;
    elementoValorConvertido.innerHTML = valorConvertido;
    //valor do h2 é trocado pelo novo valor (valorConvertido)
  }
  