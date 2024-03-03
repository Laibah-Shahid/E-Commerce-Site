const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let s1bag = document.getElementById("s1bag");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
        document.getElementById("s1bag").classList.toggle("hide");
    })  
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active'); 
        s1bag.classList.remove("hide");
    })
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      document.querySelector(".loader").style.display = "none";
    }
  };
  