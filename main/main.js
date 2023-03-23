function showMenu() {
    document.getElementById("btmenu").classList.toggle("navigationvisible");
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll").classList.add("backtopvisible");
    } else {
        document.getElementById("scroll").classList.remove("backtopvisible");
    }
}

let modal = document.getElementById('modalId');
let img1 = document.getElementById('imgId1');
let modalImg = document.getElementById("imgId");
let span = document.getElementById('cancel');
let img2 = document.getElementById("imgId2");

img1.onclick = function(){
  modal.style.display = "flex";
  modal.style.justifyContent = 'center';
  modal.style.alignItems = "center";
  modalImg.src = this.src;
}

img2.onclick = function(){
    modal.style.display = "flex";
    modal.style.justifyContent = 'center';
    modal.style.alignItems = "center";
    modalImg.src = this.src;
}

span.onclick = function() { 
  modal.style.display = "none";
}