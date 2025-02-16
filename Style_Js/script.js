// Le script pour la partie dynamique

document.addEventListener("DOMContentLoaded", () => {
  const trainingSchedule = document.getElementById("training-schedule");
  const exerciseModal = document.getElementById("exercise-modal");

  function displayExercises(day, type) {
    trainingSchedule.innerHTML = ""; // Effacer les anciennes cartes

    const exercises = (trainingData[day] && trainingData[day][type]) || [];

    exercises.forEach((exercise) => {
      // description tranquée
      const fullDescription = exercise.description;
      let truncatedDescription = fullDescription;

      if (fullDescription.length > 200) {
        truncatedDescription = fullDescription.substring(0, 200) + "...";
      }
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4"); // Utiliser les classes Bootstrap pour la mise en page
      card.innerHTML = `
                <div class="card solution_card">
                    <a href="${exercise.image}" target="_blank">
                      <img src="${exercise.image}" class="card-img-top" alt="${exercise.name}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${exercise.name}</h5>
                        <p class="card-text">${truncatedDescription}</p>
                        <button class="btn btn-primary read_more_btn">En savoir plus</button>
                    </div>
                </div>
            `;

      const readMoreBtn = card.querySelector(".read_more_btn");
      readMoreBtn.addEventListener("click", () => {
        openModal(day, exercise, type);
      });

      trainingSchedule.appendChild(card);
    });
  }

  // Gestion des clics sur les sous-menus
  // Mise à jour pour les menus Bootstrap
  const typeLinks = document.querySelectorAll("nav .dropdown-menu a");
  typeLinks.forEach((typeLink) => {
    typeLink.addEventListener("click", (event) => {
      event.preventDefault();
      // Remonte jusqu'au parent avec la classe "dropdown"
      const dropdown = typeLink.closest(".dropdown");
      // Récupère le jour (ex: "Lundi") depuis le lien dropdown-toggle
      const selectedDay = dropdown
        .querySelector(".dropdown-toggle")
        .textContent.trim()
        .toLowerCase();
      // Récupère le type (ex: "Dos", "Biceps", etc.) à partir du lien cliqué
      const selectedType = typeLink.textContent.trim().toLowerCase();
      displayExercises(selectedDay, selectedType);
    });
  });

  function openModal(day, exercise, bodyPart) {
    const modalTitle = document.querySelector("#exercise-modal .modal-title");
    const modalBody = document.querySelector("#exercise-modal .modal-body");

    modalTitle.textContent = exercise.name;

    modalBody.innerHTML = `
        <p>${exercise.description}</p>
        <form id="exercise-form">
            <div class="form-group">
                <label for="series">Nombre de séries :</label>
                <input type="number" id="series" class="form-control" min="1" value="3">
            </div>
            <div class="form-group">
                <label for="reps">Nombre de répétitions :</label>
                <input type="number" id="reps" class="form-control" min="1" value="10">
            </div>
            <div class="form-group">
                <label for="weight">Poids (kg) :</label>
                <input type="number" id="weight" class="form-control" min="0" value="0">
            </div>
            <div class="form-group">
                <label for="rest">Temps de repos (secondes) :</label>
                <input type="number" id="rest" class="form-control" min="10" value="60">
            </div>
        </form>
    `;

    // Affichage du modal Bootstrap
    const modal = new bootstrap.Modal(
      document.getElementById("exercise-modal")
    );
    modal.show();

    // Associer les données du formulaire au bouton "Ajouter"
    document.getElementById("add-exercise").onclick = function () {
      addExerciseToCart(day, exercise.name, bodyPart);
    };
  }
});

let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
const exportPdfBtn = document.getElementById("export-pdf");
const clearCartBtn = document.getElementById("clear-cart"); // Bouton pour vider le panier

// Charger les exercices depuis localStorage
let savedExercises = JSON.parse(localStorage.getItem("exerciseCart")) || [];
updateCartDisplay();

function addExerciseToCart(day, exerciseName, bodyPart) {
  const series = document.getElementById("series").value;
  const reps = document.getElementById("reps").value;
  const weight = document.getElementById("weight").value;
  const rest = document.getElementById("rest").value;

  const exerciseDetails = {
    name: exerciseName,
    day,
    bodyPart,
    series,
    reps,
    weight,
    rest,
  };

  savedExercises.push(exerciseDetails);
  localStorage.setItem("exerciseCart", JSON.stringify(savedExercises));

  updateCartDisplay();
  alert(
    `Ajouté : ${exerciseName}  (${day} - ${bodyPart} - ${series} séries, ${reps} reps, ${weight}kg, ${rest}s repos`
  );
}

function updateCartDisplay() {
  cartCount = savedExercises.length;
  cartCounter.textContent = cartCount;
}

exportPdfBtn.addEventListener("click", () => {
  // generatePDF();
  window.open("../Html/Array.html", "_blank");
});
clearCartBtn.addEventListener("click", clearCart); // Événement pour vider le panier

function updateCartCount(count) {
  document.getElementById("cart-count").textContent = count;
}

function generatePDF() {
  if (savedExercises.length === 0) {
    alert("Aucun exercice à exporter !");
    return;
  }

  let doc = new jsPDF();
  doc.text("Programme d'entraînement", 10, 10);
  let y = 20;

  savedExercises.forEach((ex, index) => {
    doc.text(`${index + 1}. ${ex.name} (${ex.day})`, 10, y);
    doc.text(
      `Séries: ${ex.series} | Répétitions: ${ex.reps} | Poids: ${ex.weight}kg | Repos: ${ex.rest}s`,
      10,
      y + 10
    );
    y += 20;
  });

  doc.save("programme_musculation.pdf");
}

function clearCart() {
  if (confirm("Voulez-vous vraiment vider le panier ?")) {
    savedExercises = [];
    localStorage.removeItem("trainingProgram");
    updateCartCount(0);
    alert("Le panier a été vidé !");
  }
}
