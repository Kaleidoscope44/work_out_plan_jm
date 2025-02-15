// Le script pour la partie dynamique

document.addEventListener("DOMContentLoaded", () => {
  const trainingSchedule = document.getElementById("training-schedule");
  const exerciseModal = document.getElementById("exercise-modal");

  const trainingData = {
    lundi: {
      dos: [
        {
          name: "Tractions",
          description:
            "Excellent exercice pour le dos. 3 séries au maximum de répétitions.",
          image: "../Images/Dos/traction-musculation-dos.gif",
        },
        {
          name: "Rowing barre",
          description: "Pour le dos et les biceps. 3 séries de 10 répétitions.",
          image: "../Images/Dos/rowing-barre.gif",
        },
        {
          name: "Tirage horizontal à la poulie",
          description:
            "Le tirage horizontal à la poulie (en anglais seated cable row) est un excellent exercice de musculation pour le dos, en particulier les muscles grands dorsaux, le milieu du dos et les trapèzes.",
          image: "../Images/Dos/tirage-horizontal-poulie.gif",
        },
        {
          name: "Tirage vertical prise inversée",
          description:
            "Le tirage vertical en prise inversée est une variante du tirage vertical. C’est un exercice qui permet de développer les muscles du dos. Bien que l’exercice cible principalement les muscles grands dorsaux, vous solliciterez également fortement les biceps et les muscles du milieu du dos.",
          image: "../Images/Dos/tirage-vertical-prise-inversee.gif",
        },

        {
          name: "Pull-over à la poulie",
          description:
            "Le pull-over à la poulie est une variante des tractions effectuées bras tendus. Cet exercice permet d’isoler les muscles grands dorsaux sur une grande amplitude de mouvement et est utile pour les personnes qui ont du mal à sentir leur dos travailler avec les tractions classiques.",
          image: "../Images/Dos/pull-over-poulie.gif",
        },

        // ... autres exercices pour le dos
      ],
      biceps: [
        {
          name: "Curl à la barre",
          description:
            "L'entraînement des biceps peut être relégué au second plan par rapport à des mouvements de force plus populaires comme le squat, le soulevé de terre et le développé couché.",
          image: "../Images/Biceps/curl-barre.gif",
        },
        {
          name: "Curl haltère incliné avec rotation",
          description:
            "Le curl incliné avec haltères est une variante du curl traditionnel avec haltères utilisée pour augmenter la taille des biceps. Le curl haltère incliné permet d’augmenter la partie négative du curl avec haltère, permettant ainsi une contraction plus prononcée des fibres musculaires du biceps.",
          image: "../Images/Biceps/curl-haltere-incline.gif",
        },

        {
          name: "Curl biceps à la poulie basse",
          description:
            "Cet exercice fait également travailler le brachial, qui se trouve sous le biceps, ainsi que les avant-bras et les deltoïdes des épaules. Votre sangle abdominale sera également sollicitée, car vous devrez stabiliser le haut de votre corps tout au long du mouvement.",
          image: "../Images/Biceps/curl-biceps-poulie-basse.gif",
        },

        {
          name: "Curl Zottman",
          description:
            "Le curl Zottman est un exercice unique avec haltères qui combine un curl biceps classique (main en supination), une rotation des poignets en haut du mouvement, puis un curl en prise inversée (main en pronation) pour revenir à la position de départ.",
          image: "../Images/Biceps/curl-zottman.gif",
        },

        {
          name: "Curl haltères prise neutre",
          description:
            "Les bras plus gros et plus forts figurent généralement en haut de la liste des priorités des pratiquants de la musculation. Pour cela, le curl en prise neutre ou curl marteau est un excellent exercice qui vous aidera à développer les biceps, qui à l’avantage de travailler également les avant-bras (le muscle long supinateur).",
          image: "../Images/Biceps/curl-haltere-prise-neutre.gif",
        },

        {
          name: "Curl biceps assis à la machine",
          description:
            "Le curl biceps assis à la machine est un excellent exercice pour ceux qui souhaitent entraîner leurs biceps de manière intensive, et en toute sécurité. En fonction de la machine, vous avez la possibilité d’utiliser une prise en supination, une prise en pronation et, si la machine le permet, une prise neutre.",
          image: "../Images/Biceps/curl-pupitre-machine-prechargee.gif",
        },
        // ... autres exercices pour les biceps
      ],
    },
    mardi: {
      pectoraux: [
        {
          name: "Développé couché haltères",
          description:
            "Le développé couché avec haltères (dumbbell bench press) est une variante du développé couché à la barre. C’est un exercice qui permet de développer les muscles pectoraux.",
          image:
            "../Images/Pecs/developpe-couche-halteres-exercice-musculation.gif",
        },
        {
          name: "Pec-deck ou butterfly",
          description:
            "Le pec deck, anciennement appelé butterfly, permet aux débutants comme aux personnes expérimentées de cibler les muscles pectoraux sans avoir à se soucier de l’équilibre à maintenir sur un banc ou un Swiss Ball. C’est également un appareil utile si vous souffrez d’une blessure au bas du dos et que vous devez éviter de rester debout.",
          image: "../Images/Pecs/pec-deck-butterfly-exercice-musculation.gif",
        },
        {
          name: "Développé incliné à la barre",
          description:
            "Le développé couché est le roi des exercices pour les pectoraux, car il développe une force massive et permet de bien développer les muscles du torse (pectoraux). La variante inclinée (incline barbell bench press en anglais) va encore plus loin et met vraiment l’accent sur le haut de la poitrine, près des clavicules.",
          image: "../Images/Pecs/developpe-incline-barre.gif",
        },

        {
          name: "Écartés couché avec haltères",
          description:
            "C’est un exercice pour les pectoraux, les épaules et les triceps, qui fait appel à un mouvement composé (polyarticulaire) et qui ne permet pas de cibler efficacement un seul muscle.",
          image: "../Images/Pecs/ecarte-couche-haltere.gif",
        },
        {
          name: "Écartés à la poulie vis-à-vis",
          description:
            "Les écartés à la poulie vis-à-vis (cable middle fly) sont une variante du Pec Deck ou Butterfly à la machine, un exercice pour renforcer les muscles pectoraux, et de l’avant des épaules. L’une des principales fonctions des muscles pectoraux est d’amener vos bras en avant de votre corps, c’est exactement ce que font les écartés.",
          image:
            "../Images/Pecs/ecarte-poulie-vis-a-vis-exercice-musculation-pectoraux.gif",
        },

        {
          name: "Développé décliné avec élastique",
          description:
            "Faire cet exercice avec un élastique est une excellente alternative aux machines à poulies ou aux dips.",
          image: "../Images/Pecs/developpe-decline-avec-elastique.gif",
        },

        {
          name: "Écartés à la poulie haute",
          description:
            "Les écartés à la poulie haute (cable crossover) sont une variante des écartés à la poulie, un exercice permettant de renforcer les muscles de la poussée, et plus particulièrement ceux de la poitrine.",
          image:
            "../Images/Pecs/ecarte-poulie-vis-a-vis-exercice-musculation.gif",
        },
        {
          name: "Développé assis à la machine pour les pectoraux",
          description:
            "Le principal moteur du mouvement de développé assis sont les grands pectoraux, également surnommé « pecs » (les muscles de la poitrine). En second plan, les épaules et les triceps sont également bien sollicités.",
          image: "../Images/Pecs/developpe-machine-assis-pectoraux.gif",
        },

        // ... autres exercices pour les pectoraux
      ],
      triceps: [
        {
          name: "Dips",
          description:
            "Pour les triceps et les épaules. 3 séries au maximum de répétitions.",
          image: "../images/dips.jpg",
        },
        // ... autres exercices pour les triceps
      ],
    },
    mercredi: {
      epaules: [
        {
          name: "Développé militaire",
          description: "Pour les épaules. 3 séries de 10 répétitions.",
          image: "../backiee-25778.jpg",
        },
        // ... autres exercices pour les épaules
      ],
      abdominaux: [
        {
          name: "Crunches",
          description: "Pour les abdominaux. 3 séries de 15 répétitions.",
          image: "../images/crunches.jpg",
        },
        // ... autres exercices pour les abdominaux
      ],
    },
    jeudi: {
      jambes: [
        {
          name: "Squats",
          description: "Pour les jambes. 3 séries de 12 répétitions.",
          image: "../images/squats.jpg",
        },
        {
          name: "Fentes",
          description: "Pour les jambes. 3 séries de 10 répétitions par jambe.",
          image: "../images/fentes.jpg",
        },
        // ... autres exercices pour les jambes
      ],
    },
    vendredi: {
      "full body": [
        {
          name: "Burpees",
          description: "Exercice full body. 3 séries de 10 répétitions.",
          image: "../images/burpees.jpg",
        },
        {
          name: "Pompes",
          description: "Exercice full body. 3 séries de 10 répétitions.",
          image: "../images/pompes.jpg",
        },
        // ... autres exercices full body
      ],
    },
  };

  function displayExercises(day, type) {
    trainingSchedule.innerHTML = ""; // Effacer les anciennes cartes

    const exercises = (trainingData[day] && trainingData[day][type]) || [];

    exercises.forEach((exercise) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4"); // Utiliser les classes Bootstrap pour la mise en page
      card.innerHTML = `
                <div class="card solution_card">
                    <a href="${exercise.image}" target="_blank">
                      <img src="${exercise.image}" class="card-img-top" alt="${exercise.name}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${exercise.name}</h5>
                        <p class="card-text">${exercise.description}</p>
                        <button class="btn btn-primary read_more_btn">En savoir plus</button>
                    </div>
                </div>
            `;

      const readMoreBtn = card.querySelector(".read_more_btn");
      readMoreBtn.addEventListener("click", () => {
        openModal(day, exercise);
      });

      trainingSchedule.appendChild(card);
    });
  }

  // Gestion des clics sur les sous-menus
  const typeLinks = document.querySelectorAll("nav ul ul a");
  typeLinks.forEach((typeLink) => {
    typeLink.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedDay =
        typeLink.parentNode.parentNode.previousElementSibling.textContent.toLowerCase();
      const selectedType = typeLink.textContent.toLowerCase();
      displayExercises(selectedDay, selectedType);
    });
  });

  function openModal(day, exercise) {
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
      addExerciseToCart(day, exercise.name);
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

function addExerciseToCart(day, exerciseName) {
  const series = document.getElementById("series").value;
  const reps = document.getElementById("reps").value;
  const weight = document.getElementById("weight").value;
  const rest = document.getElementById("rest").value;

  const exerciseDetails = {
    name: exerciseName,
    day,
    series,
    reps,
    weight,
    rest,
  };

  savedExercises.push(exerciseDetails);
  localStorage.setItem("exerciseCart", JSON.stringify(savedExercises));

  updateCartDisplay();
  alert(
    `Ajouté : ${exerciseName}  (${day} - ${series} séries, ${reps} reps, ${weight}kg, ${rest}s repos`
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
