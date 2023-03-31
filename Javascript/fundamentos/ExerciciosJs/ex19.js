/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função em js que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente */


function calcularValorPedido(codigo,produto, quantidade) {

  let preco = 0;


  switch (codigo) {
    case 100 : 
      preco = 3.0;
      console.log(` o Combo de ${quantidade} de ${produto} sairá por ${preco * quantidade}`);
    break;
    case 200:
      preco = 4.0
      console.log(` o Combo de ${quantidade} de ${produto} sairá por ${preco * quantidade}`);
    break;
    case 300:
      preco = 5.5;
      console.log(` o Combo de ${quantidade} de ${produto} sairá por ${preco * quantidade}`);
    break;
    case 400:
      preco = 7.5;
      console.log(` o Combo de ${quantidade} de ${produto} sairá por ${preco * quantidade}`);
    break;
    case 500:
      preco = 3.5;
      console.log(` o Combo de ${quantidade} de ${produto} sairá por ${preco * quantidade}`);
    break;
    case 600:
      preco = 2.5;
      console.log(` o Combo de ${quantidade} de ${produto} sairá por ${preco * quantidade}`);
    break;
    default:
      console.log("produto nao existente");
      return;
              
  }
}

calcularValorPedido(100,"Hot Dog" , 15);
calcularValorPedido(200,"Hamburguer" , 25);
calcularValorPedido(300,"Cheeseburguer" , 35);
calcularValorPedido(400,"Bauru" , 65);
calcularValorPedido(500,"Refrigerante" , 85);
calcularValorPedido(600,"suco" , 55);
calcularValorPedido(700, "pipoquinha", 5);