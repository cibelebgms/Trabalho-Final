// ===== JSON COM OS DADOS =====
const dados = {
  "noticias": [
    {
      "id": 1,
      "titulo": "Título da notícia 1",
      "descricao": "Resumo curto da notícia 1, aparece no carrossel e no card.",
      "conteudo": "Texto completo da notícia 1. Escreva aqui o conteúdo da matéria, em um ou mais parágrafos.",
      "categoria": "Tecnologia",
      "autor": "Seu Nome",
      "destaque": true,
      "data": "2026-11-01",
      "imagem_principal": "assets/img/noticia1.jpg",
      "fotos": [
        { "id": 1, "titulo": "Foto 1 da notícia 1", "imagem": "assets/img/fotos/foto1a.jpg" },
        { "id": 2, "titulo": "Foto 2 da notícia 1", "imagem": "assets/img/fotos/foto1b.jpg" }
      ]
    },
    {
      "id": 2,
      "titulo": "Título da notícia 2",
      "descricao": "Resumo curto da notícia 2.",
      "conteudo": "Texto completo da notícia 2.",
      "categoria": "Esportes",
      "autor": "Seu Nome",
      "destaque": true,
      "data": "2026-11-02",
      "imagem_principal": "assets/img/noticia2.jpg",
      "fotos": [
        { "id": 1, "titulo": "Foto 1 da notícia 2", "imagem": "assets/img/fotos/foto2a.jpg" },
        { "id": 2, "titulo": "Foto 2 da notícia 2", "imagem": "assets/img/fotos/foto2b.jpg" }
      ]
    },
    {
      "id": 3,
      "titulo": "Duran Duran e seus álbuns marcantes",
      "descricao": "Conheça a banda britânica e três dos seus álbuns mais conhecidos.",
      "conteudo": "O Duran Duran é uma banda britânica formada em Birmingham, na Inglaterra, em 1978. Nesta matéria você confere três álbuns da banda: Duran Duran (1981), Rio (1982) e Notorious (1986). Clique nas capas abaixo para conhecer cada um.",
      "categoria": "Música",
      "autor": "Seu Nome",
      "destaque": true,
      "data": "2026-11-03",
      "imagem_principal": "assets/img/duran-duran-banda.jpg",
      "fotos": [
        { "id": 1, "titulo": "Duran Duran (1981)", "imagem": "assets/img/fotos/album-duran-duran.jpg" },
        { "id": 2, "titulo": "Rio (1982)", "imagem": "assets/img/fotos/album-rio.jpg" },
        { "id": 3, "titulo": "Notorious (1986)", "imagem": "assets/img/fotos/album-notorious.jpg" }
      ]
    },
    {
      "id": 4,
      "titulo": "Título da notícia 4",
      "descricao": "Resumo curto da notícia 4.",
      "conteudo": "Texto completo da notícia 4.",
      "categoria": "Ciência",
      "autor": "Seu Nome",
      "destaque": false,
      "data": "2026-11-04",
      "imagem_principal": "assets/img/noticia4.jpg",
      "fotos": [
        { "id": 1, "titulo": "Foto 1 da notícia 4", "imagem": "assets/img/fotos/foto4a.jpg" },
        { "id": 2, "titulo": "Foto 2 da notícia 4", "imagem": "assets/img/fotos/foto4b.jpg" }
      ]
    },
    {
      "id": 5,
      "titulo": "Título da notícia 5",
      "descricao": "Resumo curto da notícia 5.",
      "conteudo": "Texto completo da notícia 5.",
      "categoria": "Economia",
      "autor": "Seu Nome",
      "destaque": false,
      "data": "2026-11-05",
      "imagem_principal": "assets/img/noticia5.jpg",
      "fotos": [
        { "id": 1, "titulo": "Foto 1 da notícia 5", "imagem": "assets/img/fotos/foto5a.jpg" },
        { "id": 2, "titulo": "Foto 2 da notícia 5", "imagem": "assets/img/fotos/foto5b.jpg" }
      ]
    },
    {
      "id": 6,
      "titulo": "Título da notícia 6",
      "descricao": "Resumo curto da notícia 6.",
      "conteudo": "Texto completo da notícia 6.",
      "categoria": "Viagens",
      "autor": "Seu Nome",
      "destaque": false,
      "data": "2026-11-06",
      "imagem_principal": "assets/img/noticia6.jpg",
      "fotos": [
        { "id": 1, "titulo": "Foto 1 da notícia 6", "imagem": "assets/img/fotos/foto6a.jpg" },
        { "id": 2, "titulo": "Foto 2 da notícia 6", "imagem": "assets/img/fotos/foto6b.jpg" }
      ]
    }
  ]
};

// ===== DADOS DO ALUNO (preencha com os seus) =====
const aluno = {
  nome: "Seu Nome Completo",
  curso: "Sistemas de Informação - PUC Minas",
  sobre: "Escreva aqui um parágrafo sobre você.",
  autoria: "Site criado por mim para o TP1 de Web Front-End.",
  redes: [
    { nome: "GitHub", link: "https://github.com/cibelebgms" },
    { nome: "LinkedIn", link: "#" }
  ]
};

// ===== FUNÇÃO AUXILIAR: formata a data (2026-11-01 -> 01/11/2026) =====
function formatarData(data) {
  return new Date(data + "T00:00:00").toLocaleDateString("pt-BR");
}

// ===== SEÇÃO 1: CARROSSEL =====
function montarCarrossel() {
  const area = document.getElementById("carrossel-itens");
  if (!area) return; // se a página não tem carrossel, não faz nada

  const destaques = dados.noticias.filter(function (n) {
    return n.destaque === true;
  });

  let html = "";
  destaques.forEach(function (n, i) {
    const ativo = i === 0 ? "active" : ""; // o primeiro precisa ter "active"
    html += `
      <div class="carousel-item ${ativo}">
        <a href="detalhe.html?id=${n.id}">
          <img src="${n.imagem_principal}" class="d-block w-100" alt="${n.titulo}">
        </a>
        <div class="carousel-caption">
          <h5><a href="detalhe.html?id=${n.id}">${n.titulo}</a></h5>
          <p>${n.descricao}</p>
        </div>
      </div>`;
  });
  area.innerHTML = html;
}

// ===== SEÇÃO 2: CARDS =====
function montarCards() {
  const area = document.getElementById("lista-cards");
  if (!area) return;

  let html = "";
  dados.noticias.forEach(function (n) {
    html += `
      <div class="col">
        <div class="card h-100">
          <a href="detalhe.html?id=${n.id}">
            <img src="${n.imagem_principal}" class="card-img-top" alt="${n.titulo}">
          </a>
          <div class="card-body">
            <span class="badge bg-secondary mb-2">${n.categoria}</span>
            <h5 class="card-title">
              <a href="detalhe.html?id=${n.id}">${n.titulo}</a>
            </h5>
            <p class="card-text">${n.descricao}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">${formatarData(n.data)}</small>
          </div>
        </div>
      </div>`;
  });
  area.innerHTML = html;
}

// ===== SEÇÃO 3: ALUNO =====
function montarAluno() {
  const area = document.getElementById("info-aluno");
  if (!area) return;

  let redes = "";
  aluno.redes.forEach(function (r) {
    redes += `<a href="${r.link}" target="_blank" class="btn btn-outline-primary btn-sm me-2">${r.nome}</a>`;
  });

  area.innerHTML = `
    <h4>${aluno.nome}</h4>
    <p class="text-muted">${aluno.curso}</p>
    <p><strong>Sobre mim:</strong> ${aluno.sobre}</p>
    <p><strong>Autoria:</strong> ${aluno.autoria}</p>
    <div>${redes}</div>`;
}

// ===== PÁGINA DE DETALHE =====
function montarDetalhe() {
  const areaGeral = document.getElementById("detalhe-geral");
  if (!areaGeral) return; // só roda no detalhe.html

  // pega o id da URL: detalhe.html?id=2
  const parametros = new URLSearchParams(window.location.search);
  const id = Number(parametros.get("id"));

  // procura a notícia com esse id
  const noticia = dados.noticias.find(function (n) {
    return n.id === id;
  });

  // se não achar, mostra aviso
  if (!noticia) {
    areaGeral.innerHTML = `<div class="alert alert-warning">Notícia não encontrada.</div>`;
    document.getElementById("detalhe-fotos").innerHTML = "";
    return;
  }

  document.title = noticia.titulo;

  // SEÇÃO 1: informações gerais (imagem, título, categoria, data, autor, descrição, conteúdo)
  areaGeral.innerHTML = `
    <div class="row g-4">
      <div class="col-12 col-md-5">
        <img src="${noticia.imagem_principal}" class="detalhe-imagem" alt="${noticia.titulo}">
      </div>
      <div class="col-12 col-md-7">
        <div class="detalhe-info">
          <span class="badge bg-secondary mb-2">${noticia.categoria}</span>
          <h1 class="h3">${noticia.titulo}</h1>
          <p class="detalhe-meta">
            Por <strong>${noticia.autor}</strong> • ${formatarData(noticia.data)}
          </p>
          <p class="fw-bold">${noticia.descricao}</p>
          <p>${noticia.conteudo}</p>
        </div>
      </div>
    </div>`;

  // SEÇÃO 2: fotos vinculadas (foto + título)
  let fotos = "";
  noticia.fotos.forEach(function (f) {
    fotos += `
      <div class="col">
        <div class="card h-100">
                    <img src="${f.imagem}" class="card-img-top foto-album" alt="${f.titulo}">
          <div class="card-body">
            <h6 class="card-title mb-0">${f.titulo}</h6>
          </div>
        </div>
      </div>`;
  });
  document.getElementById("detalhe-fotos").innerHTML = fotos;
}

// ===== EXECUTA TUDO =====
// Cada função só faz algo se encontrar a área dela na página,
// então o mesmo app.js serve para o index.html e o detalhe.html.
montarCarrossel();
montarCards();
montarAluno();
montarDetalhe();