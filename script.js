
  function calcularCusto() {
    var area = parseFloat(document.getElementById('area').value);
    var precoSelecionado = parseFloat(document.getElementById('tinta').value);
    var rendimento = parseFloat(document.getElementById('diluicao').value);
    var demao = parseFloat(document.getElementById('demaos').value);

    var precoLitro =  precoSelecionado / 18; //Litros da lata 

 

    if (!isNaN(area)) {
        var custoTotal = ((precoLitro * area) / rendimento) * demao; 

        var  qntdLata = ((area  /rendimento) / 18) * demao;  

        document.getElementById('resultado').innerHTML = "<p>Custo total da tinta: R$" + custoTotal.toFixed(2) + "</p>";
        document.getElementById('resultadoLata').innerHTML = "<p>Latas Necessarias "+ Math.ceil(qntdLata.toFixed(1)) +"</p>"; // comando math ceil arredonda pra cima !!

    } else {
        document.getElementById('resultado').innerHTML = "<p>Por favor, insira valores válidos.</p>";
        document.getElementById('resultadoLata').innerHTML = "<p> </p>";
    }


}
