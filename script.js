const searchBox =
document.getElementById("searchBox");

searchBox.addEventListener("keyup",()=>{

let filter =
searchBox.value.toLowerCase();

let cards =
document.querySelectorAll(".superstar-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

card.style.display =
text.includes(filter)
? "block"
: "none";

});

});
themeBtn.onclick = () => {

document.body.classList.toggle("light");

};
function playTheme(){

document
.getElementById("rawTheme")
.play();

}