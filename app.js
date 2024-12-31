    function sortear() {
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = parseInt(document.getElementById('de').value);
        let ate = parseInt(document.getElementById('ate').value);

        if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
            alert('Por favor, preencha todos os campos corretamente!');
            return;
        } if (de > ate) {
            alert('O campo "Do número" deve ser menor que campo "Até o número"');
            return;
        } if (quantidade > (ate - de + 1)) {
            alert('O campo "Quantidade de números" deve ser menor ou igual a diferença entre os campos "Do número" e "Até o número"');
            return;
        }

        let sorteados = [];
        let numerosSorteados;

        for (let i = 0; i < quantidade; i++) {
                numerosSorteados = obterNumeroAleatorio(de, ate);
        
                while (sorteados.includes(numerosSorteados)) {
                    numerosSorteados = obterNumeroAleatorio(de, ate);
                }
        
                sorteados.push(numerosSorteados);
            }
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarEstadoBotaoReiniciar(true);

}

    function obterNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

    function alterarEstadoBotaoReiniciar(habilitar) {
        let botao = document.getElementById('btn-reiniciar');
        botao.disabled = !habilitar;
            if(habilitar) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
            } else {
                    botao.classList.remove('container__botao');
                    botao.classList.add('container__botao-desabilitado');
            }
    }

    function reiniciar() {

        let resultado = document.getElementById('resultado');
        if (resultado.innerHTML.includes('nenhum até agora')) {
            return;
        }

        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        alterarEstadoBotaoReiniciar(false);
}


