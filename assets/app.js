
const noticias = [
  {
    id: 1,
    titulo: "A tecnologia que nos ajuda a enxergar mais longe",
    categoria: "Tecnologia",
    descricao: "Como os telescópios modernos ajudam a humanidade a explorar o universo.",
    imagem: "img/tec1.png",
    paragrafos: [
      "Desde os primeiros telescópios, a humanidade busca maneiras de observar o que existe além do nosso planeta. Com o avanço da tecnologia, esses equipamentos se tornaram cada vez mais modernos e capazes de registrar imagens de objetos extremamente distantes.",
      "Os telescópios funcionam utilizando lentes ou espelhos que captam e concentram a luz. Quanto maior a capacidade de captar essa luz, maiores são as possibilidades de observar estrelas, planetas e galáxias que não conseguimos enxergar a olho nu.",
      "Um dos exemplos mais conhecidos é o Telescópio Espacial James Webb, que permite aos cientistas estudar galáxias distantes, atmosferas de outros planetas e diferentes fenômenos espaciais.",
      "Essas descobertas mostram como a tecnologia é importante para a ciência. Cada nova observação pode ajudar a responder perguntas sobre a origem do universo e o nosso lugar nele."
    ],
    fotos: ["img/tec2.png", "img/tec3.png"]
  },
  {
    id: 2,
    titulo: "O esporte que move multidões",
    categoria: "Esportes",
    descricao: "A importância do esporte para a saúde, a convivência e a sociedade.",
    imagem: "img/esp1.png",
    paragrafos: [
      "O esporte faz parte da vida de milhões de pessoas e está presente em diferentes culturas. Futebol, vôlei, basquete, corrida e tantas outras modalidades movimentam comunidades, despertam emoções e aproximam pessoas.",
      "Além do entretenimento, a prática esportiva oferece benefícios importantes para a saúde. A atividade física regular contribui para o fortalecimento dos músculos e ossos, melhora a disposição e também pode favorecer a saúde mental.",
      "O esporte também possui um papel social. Em escolas e projetos comunitários, ele pode estimular o trabalho em equipe, o respeito às diferenças, a disciplina e a convivência.",
      "Mais do que vencer competições, praticar esportes representa uma oportunidade de desenvolver habilidades, superar limites e construir relações. Por isso, incentivar o acesso ao esporte é importante em todas as idades."
    ],
    fotos: ["img/esp2.png", "img/esp3.png"]
  },
  {
    id: 3,
    titulo: "Duran Duran e seus álbuns marcantes",
    categoria: "Música",
    descricao: "A trajetória de uma das bandas mais marcantes da música britânica.",
    imagem_principal: "img/notorius.png",
    paragrafos: [
      "Formada no Reino Unido no final da década de 1970, a banda Duran Duran conquistou reconhecimento internacional e se tornou um dos grandes nomes da música dos anos 1980. Seu estilo misturava pop, rock, elementos eletrônicos e uma identidade visual muito característica.",
      "Entre seus trabalhos mais conhecidos estão os álbuns Rio, Seven and the Ragged Tiger e Notorious. Essas produções ajudaram a construir a identidade musical do grupo e marcaram diferentes momentos de sua trajetória.",
      "Lançado em 1986, Notorious apresentou uma sonoridade com forte influência do funk e contou com a produção de Nile Rodgers. A faixa que dá nome ao álbum se destacou nas paradas musicais e demonstrou a capacidade da banda de experimentar novos caminhos.",
      "Mesmo depois de décadas, Duran Duran continua sendo lembrada por suas músicas, apresentações e influência na cultura pop. Sua trajetória demonstra como a música pode atravessar gerações e continuar conquistando novos públicos."
    ],
    fotos: []
  },
  {

    id: 4,
    titulo: "Economia no dia a dia",
    categoria: "Economia",
    descricao: "Como o planejamento financeiro pode ajudar nas decisões cotidianas.",
    imagem_principal: "img/eco1.png",
    paragrafos: [
      "A economia está presente em praticamente todas as decisões do cotidiano. O preço dos alimentos, o valor do transporte, as contas de casa e até mesmo uma compra pela internet fazem parte da relação das pessoas com o dinheiro.",
      "Nesse contexto, a educação financeira se torna uma ferramenta importante. Ela ajuda a compreender os ganhos, organizar despesas, estabelecer prioridades e tomar decisões mais conscientes.",
      "Uma das primeiras atitudes para organizar as finanças é elaborar um orçamento pessoal. Anotar quanto dinheiro entra e quanto é gasto permite identificar despesas desnecessárias e planejar melhor os próximos meses.",
      "Também é importante desenvolver hábitos de consumo consciente, evitar compras por impulso e compreender os riscos do uso inadequado do crédito. Pequenas atitudes podem fazer diferença na organização financeira.",
      "Ter conhecimento sobre dinheiro não significa apenas economizar. Significa desenvolver autonomia para fazer escolhas, lidar com imprevistos e planejar objetivos para o futuro."
    ],
    fotos: ["img/eco2.png", "img/eco3.png"]
  },
  {
    id: 5,
    titulo: "Viajar: destinos para conhecer",
    categoria: "Viagens",
    descricao: "Paisagens e lugares que inspiram quem gosta de explorar o mundo.",
    imagem: "img/viag1.png",
    paragrafos: [
      "Conhecer novos lugares é uma das experiências que mais despertam a curiosidade das pessoas. Cada destino oferece paisagens, costumes, sabores e histórias que ajudam a compreender diferentes culturas.",
      "O turismo também possui importância econômica. Hotéis, restaurantes, transportes, guias e pequenos comércios podem gerar oportunidades de trabalho e renda para as comunidades que recebem visitantes.",
      "Entretanto, viajar também exige responsabilidade. O turismo sustentável busca respeitar o meio ambiente, preservar o patrimônio histórico e valorizar os costumes das populações locais.",
      "Escolher destinos, conhecer a cultura da região e respeitar os espaços visitados são atitudes que tornam a experiência mais consciente. Assim, viajar deixa de ser apenas uma atividade de lazer e se transforma em uma oportunidade de aprendizado e troca cultural."
    ],
    fotos: ["img/viag2.png", "img/viag3.png"]
  },
  {
    id: 6,
    titulo: "Educação: os desafios e as oportunidades do ensino no Brasil",
    categoria: "Educação",
    descricao: "Os caminhos para uma educação mais acessível, inclusiva e de qualidade.",
    imagem_principal: "img/edu1.png",
    paragrafos: [
      "A educação é um dos principais instrumentos de transformação social. Por meio dela, crianças, jovens e adultos desenvolvem conhecimentos, habilidades e oportunidades que podem contribuir para a construção de um futuro melhor.",
      "Apesar de sua importância, o ensino brasileiro ainda enfrenta desafios. As diferenças de infraestrutura, acesso à tecnologia e qualidade da aprendizagem demonstram que nem todos os estudantes possuem as mesmas condições para aprender e permanecer na escola.",
      "Outro ponto importante é a desigualdade educacional entre diferentes regiões e instituições. Garantir que todos tenham acesso a um ensino de qualidade exige investimentos, formação de professores, melhores estruturas e políticas públicas eficientes.",
      "Ao mesmo tempo, novas tecnologias oferecem oportunidades para transformar a aprendizagem. Plataformas digitais, recursos interativos e ferramentas de inteligência artificial podem ampliar o acesso à informação e apoiar estudantes e professores, desde que utilizados de maneira responsável.",
      "Construir uma educação mais inclusiva depende da participação de toda a sociedade. Valorizar os profissionais da educação, combater as desigualdades e garantir oportunidades de aprendizagem são passos fundamentais para transformar a realidade do país."
    ],
    fotos: ["img/edu2.png", "img/edu3.png"]
  }
];

function formatarData(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("pt-BR");
}

/*id cards"*/
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

/*abrindo ncia*/
const noticia = noticias.find(n => n.id === id);

if (noticia) {

  /*conteudo*/
  document.getElementById("detalhe-geral").innerHTML = `
    <div class="row g-4">
      <div class="col-12">
        <img src="${noticia.imagem || noticia.imagem_principal}" class="detalhe-imagem" alt="${noticia.titulo}">
      </div>

      <div class="col-12">
        <div class="detalhe-info">
          <span class="badge bg-secondary mb-3">${noticia.categoria}</span>

          <h2>${noticia.titulo}</h2>

          <p class="detalhe-meta">${formatarData(noticia.data)}</p>

          <p><strong>${noticia.descricao}</strong></p>

          ${noticia.paragrafos.map(p => `<p>${p}</p>`).join("")}
        </div>
      </div>
    </div>
  `;

  /*fts*s*/
  let htmlFotos = "";

  noticia.fotos.forEach(foto => {
    htmlFotos += `
      <div class="col">
        <div class="card h-100">
          <img src="${foto}" class="card-img-top foto-album" alt="${noticia.titulo}">
        </div>
      </div>
    `;
  });

  document.getElementById("detalhe-fotos").innerHTML = htmlFotos;

  if (noticia.fotos.length === 0) {
    document.querySelector("#detalhe-fotos").parentElement.style.display = "none";
  }

} else {
  document.getElementById("detalhe-geral").innerHTML = `
    <h2>Notícia não encontrada.</h2>
    <p>Volte para a página inicial e escolha outra notícia.</p>
  `;

  document.getElementById("detalhe-fotos").innerHTML = "";
}
