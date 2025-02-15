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
            "La traction (en anglais pull up) est un exercice classique qui permet de cibler les muscles du haut du dos, en particulier le muscle grand dorsal. Les mouvements de traction verticale, tels que la traction classique (mains en pronation), sont des mouvements de base indispensables à vos séances d’entraînement. Après avoir trouvé une variante avec laquelle vous vous sentez à l’aise, pratiquez-la régulièrement pour gagner en force et avoir une plus belle silhouette..",
          image: "../Images/Dos/traction-musculation-dos.gif",
        },
        {
          name: "Rowing barre",
          description:
            "Le rowing barre est un exercice composé qui fait travailler plusieurs groupes de muscles. Cet exercice fait travailler en particulier plusieurs muscles du dos, notamment le muscle grand dorsal (latissimus dorsi), le muscle sous-épineux (infraspinatus), les rhomboïdes, les muscles spinaux droits (erector spinae) et les muscles deltoïdes postérieurs (également appelés deltoïdes arrière).",
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

        {
          name: "Tirage vertical prise serrée",
          description:
            "Le tirage vertical prise serrée (V-bar lat pull down) est une variante du tirage vertical standard (lat pull down). Cet exercice est couramment pratiqué pour varier un entraînement du dos. L’avantage de cet exercice est que la position neutre des mains permet d’atténuer la pression exercée sur l’épaule pendant le mouvement de traction verticale.",
          image: "../Images/Dos/tirage-vertical-prise-serree.gif",
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
          name: "Développé assis à la machine",
          description:
            "Le principal moteur du mouvement de développé assis sont les grands pectoraux, également surnommé « pecs » (les muscles de la poitrine). En second plan, les épaules et les triceps sont également bien sollicités.",
          image: "../Images/Pecs/developpe-machine-assis-pectoraux.gif",
        },

        // ... autres exercices pour les pectoraux
      ],
      triceps: [
        {
          name: "Barre front",
          description:
            "Le « barre front » (lying barbell tricep extension) est un exercice d’extension des triceps effectué couché avec une barre. Il s’agit d’un exercice populaire dont le principal avantage est d’obtenir un étirement très important du muscle, ce qui permet d’activer davantage de fibres pour l’hypertrophie musculaire.",
          image: "../Images/Triceps/barre-front.gif",
        },

        {
          name: "Dips aux barres parallèles",
          description:
            "Les dips sont un des exercices de musculation les plus sous-estimés. Avec l’abondance de machines disponibles pour travailler les bras, les épaules et les pectoraux, on a tendance à oublier certains exercices au poids de corps qui pourtant sont redoutablement efficaces.",
          image: "../Images/Triceps/barre-front.gif",
        },

        {
          name: "Extensions verticales à la poulie haute",
          description:
            "Un exercice très populaire pour développer les triceps, les extensions verticales à la poulie haute (en anglais cable triceps pushdown) est un incontournable pour développer des bras plus gros et plus forts. L’avantage est que cet exercice fait travailler les trois chefs du muscle triceps.",
          image: "../Images/Triceps/extension-triceps-poulie-haute.gif",
        },

        {
          name: "Extension verticale à la poulie basse",
          description:
            "L’extension verticale des triceps à la poulie avec corde (en anglais rope overhead cable extension) est un exercice populaire pour muscler l’arrière des bras. Cet exercice d’isolation permet un étirement important des muscles triceps pendant la partie excentrique (négative) du mouvement. Il s’agit donc d’un excellent moyen d’augmenter la taille des bras.",
          image:
            "../Images/Triceps/extension-verticale-triceps-poulie-basse.gif",
        },

        {
          name: "Extension horizontale à la poulie",
          description:
            "Les extensions horizontales à la poulie sont un exercice qui permet de travailler principalement les triceps et les deltoïdes postérieurs. Il s’agit d’un mouvement peu courant, mais cela n’enlève en rien son efficacité. Il s’agit en quelque sorte de deux exercices en un qui ciblent deux muscles différents. Vous pouvez donc faire d’une pierre deux coups, ce qui vous permettra de gagner du temps et de rendre votre entraînement plus productif.",
          image: "../Images/Triceps/extension-horizontale-poulie.gif",
        },

        {
          name: "Extensions des triceps incliné avec haltères",
          description:
            "Les extensions de triceps avec haltères inclinés sont un excellent exercice pour isoler vos triceps. Il peut être effectué aussi bien par ceux qui cherchent à obtenir de plus gros triceps que par ceux qui cherchent à augmenter leur force. Cet exercice est une variante des extensions de triceps avec haltères couchés avec une légère inclinaison du mouvement. Cette inclinaison augmente l’amplitude du mouvement, ce qui permet d’obtenir un meilleur étirement du triceps en fin de mouvement.",
          image:
            "../Images/Triceps/extension-triceps-banc-incline-halteres.gif",
        },

        {
          name: "Extensions verticales à deux mains avec haltère",
          description:
            "Les extensions verticales à deux mains avec haltère en position assise inclinée (en anglais incline two arm dumbbell extension) sont un mouvement fantastique qui permet de développer la masse et la force des trois chefs des triceps.",
          image:
            "../Images/Triceps/extensions-verticales-a-deux-mains-avec-haltere.gif",
        },

        // ... autres exercices pour les triceps
      ],
    },
    mercredi: {
      épaules: [
        {
          name: "Développé militaire",
          description:
            "Le développé militaire (military press) est un exercice qui permet de solliciter les muscles des épaules, des pectoraux, du haut du dos, des triceps et de la ceinture abdominale, ce qui en fait un exercice difficile pour les débutants.",
          image:
            "../Images/Epaule/developpe-militaire-exercice-musculation.gif",
        },

        {
          name: "Développé Arnold",
          description:
            "Le développé Arnold (dumbbell Arnold press) est un exercice très efficace pour développer les muscles deltoïdes. Il s’agit d’une variante unique du développé épaules avec haltères, qui doit son nom au bodybuilder, acteur et gouverneur emblématique Arnold Schwarzenegger. Ce mouvement permet de maximiser l’activation des deltoïdes antérieur et moyen, ce qui en fait un excellent exercice deux en un. Du fait de sa grande amplitude de mouvement et de la rotation qu’il nécessite, il augmente le temps sous tension, ce qui favorise une plus grande hypertrophie.",
          image: "../Images/Epaule/developpe-arnold-exercice-musculation.gif",
        },

        {
          name: "Élévations latérales",
          description:
            "Les élévations frontales avec haltères (dumbbell front raise) sont un exercice de musculation qui cible les muscles des épaules, et plus particulièrement la partie antérieure des muscles. C’est un exercice dit d’isolation, car il met en jeu une seule articulation (l’épaule) pour effectuer le mouvement, contrairement aux exercices composés, aussi appelés polyarticulaires qui font appel à plusieurs articulations, comme le développé Arnold ou développé militaire pour les épaules.",
          image:
            "../Images/Epaule/elevations-frontales-exercice-musculation.gif",
        },

        {
          name: "Élévations frontales",
          description:
            "Les élévations latérales (dumbbell lateral raise) sont un exercice de musculation pour les épaules qui consiste à élever une paire d’haltères sur les côtés du corps. Avec une bonne technique, les élévations latérales favorisent la croissance musculaire (un processus connu sous le nom d’hypertrophie).",
          image:
            "../Images/Epaule/elevations-laterales-exercice-musculation.gif",
        },

        {
          name: "Développé épaules à la Smith machine",
          description:
            "Le développé épaules est un exercice composé du haut du corps très intéressant. Il peut être effectué à l’aide de poids libres comme les haltères, les kettlebells, les bandes de résistance, à la barre ou avec l’aide d’appareils de musculation comme la Smith Machine. Le mouvement implique l’utilisation de vos muscles stabilisateurs des avant-bras, des bras et des épaules afin que vos articulations restent en place pour maintenir la posture pendant que vous soulevez les charges.",
          image: "../Images/Epaule/developpe-epaules-smith-machine.gif",
        },
        {
          name: "Élévations latérales unilatérales à la poulie",
          description:
            "Si vous voulez des épaules larges, qui donneront l’illusion d’une taille fine, et si vous voulez que vos muscles deltoïdes soient bien ronds, il est essentiel de ne pas se contenter de faire des exercices de développé épaules, mais de faire aussi des exercices d’élévation latérale.",
          image: "../Images/Epaule/elevations-laterales-unilaterale-poulie.gif",
        },

        {
          name: "Croix de fer avec haltères",
          description:
            "Cet exrecice permet d’entraîner plusieurs muscles à la fois. Il cible principalement les épaules (deltoïdes), mais comme il implique un squat, il permet d’effectuer un travail complet du corps avec notamment les quadriceps, mais aussi les fessiers et les abdominaux.",
          image: "../Images/Epaule/croix-de-fer-halteres.gif",
        },

        {
          name: "Tirage menton barre guidée",
          description:
            "Le tirage menton barre guidée est une variante du tirage menton barre libre et c’est un exercice utilisé pour cibler les muscles des épaules. La Smith Machine permet de réaliser un mouvement de translation régulier qui permet de mieux isoler les muscles des épaules.",
          image: "../Images/Epaule/tirage-menton-machine-guidee.gif",
        },

        {
          name: "Face pull",
          description:
            "Le face pull est un exercice d’isolation à la poulie qui permet de faire travailler principalement les épaules et secondairement le dos. Il cible spécifiquement les deltoïdes postérieurs (arrière des épaules), et sollicite aussi les rhomboïdes (les muscles qui vous permettent de serrer vos omoplates) et le milieu des trapèzes.",
          image: "../Images/Epaule/face-pull.gif",
        },

        // ... autres exercices pour les épaules
      ],
      abdominaux: [
        {
          name: "Russian twist",
          description:
            "L'exercice du Russian Twist avec développé épaules (en anglais Russian Twist with Overhead Press) est une combinaison dynamique entre le Russian Twist et le développé épaules, offrant une approche complète de renforcement musculaire. En combinant la torsion du buste avec le mouvement de développé au-dessus de la tête, cet exercice sollicite les muscles abdominaux, les obliques, les épaules, les bras et les muscles du haut du dos. Il présente de nombreux avantages, notamment l’amélioration de la force fonctionnelle, car le mouvement engage plusieurs groupes musculaires en même temps.",
          image: "../Images/Abdos/russian-twist-avec-developpe-epaule.gif",
        },
        {
          name: "Crunch",
          description:
            "Les crunchs sont un mouvement de base qui permet de cibler les muscles abdominaux, en particulier le muscle droit de l’abdomen (le muscle du six-pack) et les obliques. Étant donné qu’il ne nécessite pas de matériel ou de machine, c’est un des premier exercice que l’on effectue à la maison quand on veut « travailler les abdos ».",
          image: "../Images/Abdos/crunch-au-sol-exercice-musculation.gif",
        },
        {
          name: "Planche",
          description:
            "La planche (en anglais front plank) est un exercice de gainage très efficace pour renforcer les abdominaux et améliorer la posture. Cet exercice sollicite en profondeur les muscles abdominaux, dorsaux et fessiers. Réalisée régulièrement, la planche permet d’obtenir rapidement un ventre plat et des abdominaux dessinés.",
          image: "../Images/Abdos/planche-abdos.gif",
        },

        {
          name: "Relevé de jambes à la chaise",
          description:
            "Le relevé de jambes à la chaise romaine (en anglais Captain’s chair), effectué à l’aide d’un appareil de musculation appelé chaise romaine, est un exercice qui permet de renforcer les muscles abdominaux.",
          image: "../Images/Abdos/releve-jambes-chaise-romaine-abdominaux.gif",
        },

        {
          name: "Relevé de genoux suspendu",
          description:
            "Les mouvements de type crunch se focalisent sur la partie supérieure des abdominaux, ce qui vous permettra peut-être, si votre taux de graisse corporelle est suffisamment bas, d’obtenir deux abdominaux, mais il vous en manquera quatre pour obtenir la totale. C’est pourquoi il est important de consacrer autant de temps d’entraînement à vos abdominaux inférieurs qu’à vos abdominaux supérieurs, et il existe peu de mouvements plus adaptés à cette fin que le relevé de genoux suspendu (hanging leg hip raise).",
          image:
            "../Images/Abdos/releve-de-genoux-suspendu-exercice-musculation.gif",
        },

        {
          name: "Crunch à la poulie",
          description:
            "L’utilisation d’une machine équipée d’une poulie vous permet d’ajouter du poids en utilisant une goupille, et la tension constante du câble signifie que vos muscles abdominaux doivent travailler dur à chaque instant pendant l’exercice, rendant cet exercice plus efficace que le crunch classique.",
          image: "../Images/Abdos/crunch-poulie-haute-exercice-musculation.gif",
        },

        {
          name: "Flexions des obliques au banc à 45°",
          description:
            "Les flexions latérales du buste (45 side bend) permettent de cibler vos obliques externes. Cet exercice s’effectue de préférence sur un banc à lombaire à 45°, un appareil conçu à l’origine pour les extensions des lombaires, et que l’on trouve dans la plupart des salles de sport.",
          image:
            "../Images/Abdos/flexions-des-obliques-banc-lombaire-45-exercice-musculation.gif",
        },

        {
          name: "Rotations des abdominaux suspendu",
          description:
            "Les rotations des abdominaux suspendu sont une variante du relevé de jambes qui permet de maximiser le travail des obliques. C’est un excellent mouvement qui permet d’effectuer un gainage dynamique de la sangle abdominale.",
          image: "../Images/Abdos/rotations-abdos-obliques-suspendu.gif",
        },

        {
          name: "Crunch à la machine",
          description:
            "Le crunch à la machine est un exercice d’isolation qui permet de travailler les abdominaux avec une charge définie. Cet exercice est donc intéressant pour travailler avec une charge additionnelle plus importante, si faire des dizaines de crunchs au sol devient trop facile pour vous.",
          image: "../Images/Abdos/crunch-machine-abdos.gif",
        },

        {
          name: "AB Coaster",
          description:
            "Si vous voulez muscler vos abdos, essayez l’Ab Coaster, un appareil révolutionnaire pour les abdominaux. Cet appareil est parfait pour les personnes qui souhaitent travailler les muscles abdominaux, mais qui n’arrivent pas à apprécier les exercices traditionnels comme les crunchs, les relevés de jambes et les relevés de buste.",
          image: "../Images/Abdos/ab-coaster-abdominaux.gif",
        },

        {
          name: "Touche talon alternés",
          description:
            "Les touches talons alternés (en anglais heel touches) sont un excellent exercice pour cibler les muscles obliques. Les touchés de chevilles font également travailler le muscle droit de l’abdomen et le muscle transverse de l’abdomen. Cet exercice simple et efficace crée une forte contraction des muscles obliques. Il permet de travailler la mobilité, la stabilité et la souplesse des hanches et du bas du dos. Il vous aidera aussi à affiner votre taille et à renforcer votre ceinture abdominale dans son ensemble.",
          image: "../Images/Abdos/touche-talon-alternes.gif",
        },

        {
          name: "Hollow hold",
          description:
            "orsque la plupart des gens pensent à l’entraînement des abdominaux, ils ont tendance à se concentrer sur les avantages esthétiques d’un ventre plat et fort. Après tout, de nombreux pratiquants s’entraînent dans le but précis de développer un six-pack. S’il n’y a absolument rien de mal à vouloir améliorer son apparence, les avantages de l’entraînement des muscles profonds vont au-delà de l’apparence. Une ceinture abdominale solide augmente la stabilité lombaire, améliore les performances sportives et peut même réduire le risque de blessure.",
          image: "../Images/Abdos/hollow-hold.gif",
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
