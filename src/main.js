import "./style.css";

const url = "https://picsum.photos/v2/list?page=1&limit=30";

const body = document.querySelector("body");
const main = document.querySelector("main");
const button = document.querySelector("button");

async function getDados(url) {
  const resposta = await fetch(url);
  const dados = await resposta.json();

  filtrarDados(dados);
}

function filtrarDados(dados) {
  dados.forEach((elemento) => {
    inserirIMG(elemento.download_url, elemento.author);
  });
}

function estilizarMural() {
  body.classList.add(
    "p-20",
    "min-h-screen",
    "transition-colors",
    "duration-300",
  );

  main.classList.add("columns-1", "sm:columns-2", "lg:columns-3", "gap-5");

  button.classList.add(
    "fixed",
    "top-5",
    "right-5",
    "p-2",
    "size-10",
    "rounded-full",
    "bg-white",
    "shadow",
    "z-10",
  );
}

function inserirIMG(url, autor) {
  // card
  const card = document.createElement("div");

  card.classList.add("mb-5", "break-inside-avoid");

  // imagem
  const img = document.createElement("img");

  img.src = url;
  img.alt = `Foto de ${autor}`;

  img.classList.add(
    "rounded-xl",
    "w-full",
    "hover:scale-105",
    "transition-all",
    "duration-300",
  );

  // nome do autor
  const nomeAutor = document.createElement("p");

  nomeAutor.textContent = autor;

  nomeAutor.classList.add("mt-2", "font-semibold", "text-sm");

  // adiciona no card
  card.appendChild(img);
  card.appendChild(nomeAutor);

  // adiciona card na página
  main.appendChild(card);
}

function modoEscuro() {
  body.classList.toggle("bg-black");
  body.classList.toggle("text-white");
}

button.addEventListener("click", () => {
  modoEscuro();

  const img = button.querySelector("img");

  if (body.classList.contains("bg-black")) {
    img.src = "/ensolarado.png";
  } else {
    img.src = "/moon-solid.png";
  }
});

estilizarMural();
getDados(url);
