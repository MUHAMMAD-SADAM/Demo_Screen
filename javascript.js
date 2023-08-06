var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
const progress = document.querySelector('.progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, purple 0%, purple ${value}%, rgb(245, 222, 245) ${value}%,  rgb(245, 222, 245)100%)`
})
// sidebar javascrpipt

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
