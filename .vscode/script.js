function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lightMode
    img.setAttribute("src", "./assets/avatar-light.png")  
  } else {
    // se estiver sem lightmode:
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
