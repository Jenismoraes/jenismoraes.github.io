const atividades = [
  {
    missao: 'Reforçar a fiscalização de despejo ilegal de resíduos no mar',
    detalhes:
      'Crie um grupo de voluntários para fiscalizar a costa da sua cidade',
    prazo: '30/10/2024',
    pontos: 100,
    completo: false,
  },
  {
    missao: 'Faça Parte de uma organização de limpeza costeira',
    detalhes:
      'A limpeza costeira é feita por voluntários todos os sábados. Participe de uma limpeza para completar a missão',
    prazo: '30/10/2024',
    pontos: 300,
    completo: false,
  },
  {
    missao: 'Plantar árvores em áreas desmatadas',
    detalhes:
      'Junte-se a um grupo de voluntários para plantar árvores em áreas desmatadas',
    prazo: '15/11/2024',
    pontos: 700,
    completo: true,
  },
  {
    missao: 'Participar de uma campanha de reciclagem',
    detalhes:
      'Participe de uma campanha de reciclagem de plástico em sua cidade e grave um vídeo mostrando os itens que você reciclou',
    prazo: '01/12/2024',
    pontos: 200,
    completo: false,
  },
  {
    missao: 'Reduzir em pelo menos 20% o consumo de água na sua casa',
    detalhes: 'Tire uma foto do seu hidrômetro antes e depois da redução',
    prazo: '01/12/2024',
    pontos: 1000,
    completo: false,
  },
  {
    missao: 'Reduzir em pelo menos 15% o consumo de energia na sua casa',
    detalhes: 'Tire uma foto da sua conta de luz antes e depois da redução',
    prazo: '01/12/2024',
    pontos: 200,
    completo: false,
  },
];

const tabelaAtividades = document
  .getElementById('tabela-atividades')
  .getElementsByTagName('tbody')[0];

const contadorDePontos = document.getElementById('pontos-contador');

function calcularPontos() {
  const pontosCompletos = atividades
    .filter((a) => a.completo)
    .map((e) => e.pontos)
    .reduce((p, a) => p + a, 0);

  contadorDePontos.innerText = pontosCompletos;
}

calcularPontos();

function mostrarTabela(atividades) {
  tabelaAtividades.innerHTML = '';

  atividades.forEach((atividade, index) => {
    const row = tabelaAtividades.insertRow();

    const adicionarColuna = (valor, nomeColuna) => {
      const cell = row.insertCell();
      cell.setAttribute('data-column', nomeColuna);
      cell.innerText = valor;
      return cell;
    };

    // add data-column attribute to each cell
    const missaoColuna = adicionarColuna(atividade.missao, 'Missão');
    adicionarColuna(atividade.prazo, 'Prazo');
    adicionarColuna(atividade.pontos, 'Pontos');

    if (atividade.completo) {
      row.classList.add('completed-row');
    }

    // Torna a coluna da missão clicável se houver detalhes e a atividade não estiver completa
    if (atividade.detalhes && !atividade.completo) {
      missaoColuna.classList.add('missao');
      missaoColuna.onclick = function () {
        // Exibe um alerta com os detalhes da missão
        alert(atividade.detalhes);
      };
    }

    const actionCell = row.insertCell();
    const button = document.createElement('button');
    button.className = 'btn-light';
    button.innerText = atividade.completo ? 'Completo' : 'Completar';
    button.disabled = atividade.completo;

    button.onclick = function () {
      // Quando o botão é clicado, muda o estado da atividade para completo e recalcula os pontos
      atividades[index].completo = true;
      calcularPontos();
      mostrarTabela(atividades);
    };
    actionCell.appendChild(button);
  });
}

document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const pesquisa = document.getElementById('pesquisar').value.toLowerCase();

    // Filtra as atividades que contêm a pesquisa no nome da missão
    const atividadesFiltradas = atividades.filter((atividade) =>
      atividade.missao.toLowerCase().includes(pesquisa)
    );

    // Renderiza a tabela com as atividades filtradas
    mostrarTabela(atividadesFiltradas);
  });

// Initial render
mostrarTabela(atividades);
