function showMatchPage() {

    document.querySelector(".roster-section").style.display = "none";

    document.getElementById("matchPage").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goBack() {

    document.querySelector(".roster-section").style.display = "block";

    document.getElementById("matchPage").classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Superstar card animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(1.1)";

        setTimeout(() => {
            card.style.transform = "";
        }, 300);

    });

});