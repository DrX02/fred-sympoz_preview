// Script de navigation active state

const links = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {
    if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === '#')) {
        link.classList.add('active');
    }
});


// Ajoute la classe "nav-scrolled" quand on descend
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});

// Script pour les images de la section réalisations
const totalImages = 20;
const visibleContainer = document.getElementById("realizations-visible");
const hiddenContainer = document.getElementById("realizations-hidden");

for (let i = 1; i <= totalImages; i++) {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="realisation-item">
        <img src="assets/img/real/${i}.jpg" alt="Réalisation ${i}">
      </div>
    `;

    if (i <= 8) {
        visibleContainer.appendChild(col);
    } else {
        hiddenContainer.appendChild(col);
    }
}

// Gérer le texte du bouton "Voir plus / Voir moins"
const toggleBtn = document.getElementById("toggleBtn");
const collapse = document.getElementById("moreRealizations");

collapse.addEventListener("shown.bs.collapse", () => {
    toggleBtn.innerText = "Voir moins";
});

collapse.addEventListener("hidden.bs.collapse", () => {
    toggleBtn.innerText = "Voir plus";
});





