var sidenav = document.getElementById("sidenav")
var openBtn = document.getElementById("open-btn")
var closeBtn = document.getElementById("close-btn")

openBtn.onclick = openNav
closeBtn.onclick = closeNav

function openNav() {
  sidenav.classList.add("active")
}

function closeNav() {
  sidenav.classList.remove("active")
}