$darkMode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 toggleDarkMode()
}
function toggleDarkMode(){
 if ($darkMode == false){
  document.body.style.backgroundImage = "url(background/latar.jpg)"
  document.body.style.color = "White"
  document.body.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}
