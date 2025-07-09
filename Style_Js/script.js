// Le script pour la partie dynamique

document.addEventListener("DOMContentLoaded", () => {
  const trainingSchedule = document.getElementById("training-schedule");
  const exerciseModal = document.getElementById("exercise-modal");

  //
  const notificationBox = document.querySelector(".notification-box");
  const cartModal = document.createElement("div");
  cartModal.classList.add("modal", "fade");
  cartModal.id = "cart-modal";
  cartModal.innerHTML = `
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Mon panier</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <ul id="cart-items" class="list-group"></ul>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              </div>
          </div>
      </div>
  `;
  document.body.appendChild(cartModal);
  const cartModalInstance = new bootstrap.Modal(cartModal);

  notificationBox.addEventListener("click", function () {
    updateCartModal();
    cartModalInstance.show();
  });

  function updateCartModal() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    let exercises = JSON.parse(localStorage.getItem("exerciseCart")) || [];

    if (exercises.length === 0) {
      cartItemsContainer.innerHTML =
        '<li class="list-group-item">Aucun exercice ajouté.</li>';
    } else {
      exercises.forEach((exercise, index) => {
        let li = document.createElement("li");
        li.classList.add(
          "list-group-item",
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );
        li.innerHTML = `
          <div>
            <strong>${exercise.name}</strong> (${exercise.day} - ${exercise.bodyPart})<br>
            ${exercise.series} séries x ${exercise.reps} reps - ${exercise.weight}kg - ${exercise.rest}s repos
          </div>
          <button class="btn btn-danger btn-sm remove-exercise" data-index="${index}">Supprimer</button>
        `;
        cartItemsContainer.appendChild(li);
      });
    }
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-exercise")) {
      let index = event.target.getAttribute("data-index");
      let exercises = JSON.parse(localStorage.getItem("exerciseCart")) || [];
      exercises.splice(index, 1);
      localStorage.setItem("exerciseCart", JSON.stringify(exercises));
      updateCartModal();
      document.getElementById("cart-count").textContent = exercises.length;
    }
  });

  //
  // Fonction pour extraire tous les noms uniques d'exercices
  function populateSuggestions() {
    const suggestionSet = new Set();
    for (const day in trainingData) {
      if (trainingData.hasOwnProperty(day)) {
        for (const type in trainingData[day]) {
          if (trainingData[day].hasOwnProperty(type)) {
            trainingData[day][type].forEach((exercise) => {
              suggestionSet.add(exercise.name);
            });
          }
        }
      }
    }
    const datalist = document.getElementById("suggestions");
    suggestionSet.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      datalist.appendChild(option);
    });
  }

  // Appel de la fonction pour remplir le datalist avec les suggestions
  populateSuggestions();

  // Fonction pour afficher les exercices
  function displayExercises(day, type) {
    trainingSchedule.innerHTML = ""; // Effacer les anciennes cartes
    const exercises = (trainingData[day] && trainingData[day][type]) || [];
    exercises.forEach((exercise) => {
      const fullDescription = exercise.description;
      // let truncatedDescription = fullDescription;
      // if (fullDescription.length > 200) {
      //   truncatedDescription = fullDescription.substring(0, 200) + "...";
      let truncatedDescription =
        fullDescription.length > 200
          ? fullDescription.substring(
              0,
              fullDescription.lastIndexOf(" ", 200)
            ) + "..."
          : fullDescription;

      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
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

  // Fonction de recherche par mot-clé
  document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.toLowerCase();
    trainingSchedule.innerHTML = "";
    const results = [];

    // Recherche dans tous les exercices de trainingData
    for (const day in trainingData) {
      if (trainingData.hasOwnProperty(day)) {
        for (const type in trainingData[day]) {
          if (trainingData[day].hasOwnProperty(type)) {
            trainingData[day][type].forEach((exercise) => {
              if (exercise.name.toLowerCase().includes(query)) {
                results.push({ day, type, exercise });
              }
            });
          }
        }
      }
    }

    // Filtrer les doublons basés uniquement sur le nom de l'exercice (en minuscules)
    const uniqueResults = [];
    results.forEach((item) => {
      const nameLower = item.exercise.name.toLowerCase();
      if (
        !uniqueResults.some((u) => u.exercise.name.toLowerCase() === nameLower)
      ) {
        uniqueResults.push(item);
      }
    });

    if (uniqueResults.length === 0) {
      trainingSchedule.innerHTML = "<p>Aucun exercice trouvé.</p>";
    } else {
      uniqueResults.forEach((item) => {
        const fullDesc = item.exercise.description;
        let truncatedDesc = fullDesc;
        if (fullDesc.length > 200) {
          truncatedDesc = fullDesc.substring(0, 200) + "...";
        }
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
          <div class="card solution_card">
            <a href="${item.exercise.image}" target="_blank">
              <img src="${item.exercise.image}" class="card-img-top" alt="${
          item.exercise.name
        }">
            </a>
            <div class="card-body">
              <h5 class="card-title">${item.exercise.name}</h5>
              <p class="card-text">${truncatedDesc}</p>
              <p class="small">Jour : ${
                item.day.charAt(0).toUpperCase() + item.day.slice(1)
              } - Groupe : ${
          item.type.charAt(0).toUpperCase() + item.type.slice(1)
        }</p>
              <button class="btn btn-primary read_more_btn">En savoir plus</button>
            </div>
          </div>
        `;
        const readMoreBtn = card.querySelector(".read_more_btn");
        readMoreBtn.addEventListener("click", () => {
          openModal(item.day, item.exercise, item.type);
        });
        trainingSchedule.appendChild(card);
      });
    }
  });

  // Gestion des clics sur les sous-menus pour les dropdowns
  const typeLinks = document.querySelectorAll("nav .dropdown-menu a");
  typeLinks.forEach((typeLink) => {
    typeLink.addEventListener("click", (event) => {
      event.preventDefault();
      const dropdown = typeLink.closest(".dropdown");
      const selectedDay = dropdown
        .querySelector(".dropdown-toggle")
        .textContent.trim()
        .toLowerCase();
      const selectedType = typeLink.textContent.trim().toLowerCase();
      displayExercises(selectedDay, selectedType);
    });
  });

  // Gestion du clic pour mettre en surbrillance le jour sélectionné
  const dayLinks = document.querySelectorAll("nav .dropdown-toggle");
  dayLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Retirer la classe active de tous les jours
      dayLinks.forEach((l) => l.classList.remove("active-day"));
      // Appliquer la classe active à l'élément cliqué
      this.classList.add("active-day");
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
    const modal = new bootstrap.Modal(
      document.getElementById("exercise-modal")
    );
    modal.show();
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
    console.log("clearCart() a été exécuté !");
    // localStorage.removeItem("trainingProgram");
    localStorage.removeItem("exerciseCart");

    updateCartCount(0);
    alert("Le panier a été vidé !");
  }
}
