const url='https://raw.githubusercontent.com/fabianoronobo/J3CienciasDeDados/refs/heads/main/dados.json'
async function vizualizarInformacoesGlobais() {
    const resposta = await fetch(url)
    const dados = await resposta.json()
    
    const qtdeAlunos = (dados.qtde_total_alunos_turma / 1e3)
    const assistemYoutube = (dados.youtube / 1e3)
    const usamFacebook = (dados.facebook / 1e3)
    const usamInstagram = (dados.instagram)
    const porcentagemYoutube = ((assistemYoutube / qtdeAlunos) * 100).toFixed(2);
    const porcentagemFacebook = ((usamFacebook / qtdeAlunos) * 100).toFixed(2);
    const porcentagemInstagram = (((usamInstagram/1000) / qtdeAlunos) * 100).toFixed(2);
    const horasYoutube = parseInt(dados.qtde_tempo_youtube)
    const minutosYoutube = Math.round((dados.qtde_tempo_youtube - horasYoutube) * 60)
    const horasFacebook = parseInt(dados.qtde_tempo_facebook)
    const minutosFacebook = Math.round((dados.qtde_tempo_facebook - horasFacebook) * 60)
    const horasInstagram = parseInt(dados.qtde_tempo_instagram)
    const minutosInstagram = Math.round((dados.qtde_tempo_instagram - horasInstagram) * 60)  

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que foram consultados <span>${qtdeAlunos}</span> mil estudantes e desses, aproximadamente, <span>${assistemYoutube} mil</span> assitem Youtube, <span>${usamFacebook} mil</span> usam Facebook e <span>${usamInstagram}</span> usam Instagram. Além disso, foram constatados que esses estudantes passam <span>${horasYoutube} horas</span> e <span>${minutosYoutube} minutos</span> no Youtube, <span>${horasFacebook} horas</span> e <span>${minutosFacebook} minutos</span> no Facebook e <span>${horasInstagram} horas</span> e <span>${minutosInstagram} minutos</span> no Instagram.<br>Isso significa que aproximadamente <span>${porcentagemYoutube}%</span> no Youtube, <span>${porcentagemFacebook}%</span> no Facebook e <span>${porcentagemInstagram}%</span> no Instagram.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();