function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  const alt = document.querySelector("img")
  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de perfil de Marcos Filipe de óculus escuros, roupa escura em um fundo azul escuro"
    )
  } else {
    alt.setAttribute(
      "alt",
      "Foto de perfil de Marcos FIlipe usando camisa preta e fundo amarelo"
    )
  }
}
