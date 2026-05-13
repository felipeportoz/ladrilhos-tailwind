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

function inserirIMG(url, author) {
  let container = document.createElement("div");

  container.className = `
    mb-5 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-md
    transition duration-300
    hover:scale-[1.03] hover:shadow-2xl hover:brightness-95
  `;

  let img = document.createElement("img");
  img.src = url;

  img.className = `
    w-full rounded-t-xl
    transition duration-300
    hover:blur-[1px]
  `;

  let authorNome = document.createElement("p");
  authorNome.textContent = `Foto por ${author}`;

  authorNome.className = `
    p-3 text-center text-sm font-semibold text-slate-700
  `;

  container.appendChild(img);
  container.appendChild(authorNome);
  main.appendChild(container);
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
