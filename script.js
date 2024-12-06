function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const icon = document.querySelector("#switch ion-icon")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    icon.setAttribute("name", "sun")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    icon.setAttribute("name", "moon")
  }
}
