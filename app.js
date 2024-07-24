document.addEventListener("DOMContentLoaded", function() {
    // Lista de paradas en la ruta
    const stops = [
        { name: "1 - La Traída", img: "https://lh5.googleusercontent.com/p/AF1QipMsuxZL80rxIcghygXTbYuK5_rScMkECDp2gGbP" },
        { name: "2 - El Derby", img: "https://www.cafeelsiglo.es/wp-content/uploads/AF1QipO8NyuZ4fpEa3aUdjn1C7j1tz4bLhdproQ0KNsxw426-h240-k-no.jpeg" },
        { name: "3 - Cafetería Bellini", img: "https://img.restaurantguru.com/r901-Cafeteria-Bellini-exterior.jpg" },
        { name: "4 - Bar Vivaldi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBFpiwEqFSvAw8or4gFiMZ4RZ55c9r-qRlQ&s" },
        { name: "5 - Hamburguesería Dávila's", img: "data:image/jpeg;base64,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" },
		{ name: "6 - Delicio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiB0sJ8qrvqlyL2DdTD5Xorq1Pv8yroETGtw&s" },
        { name: "7 - Bar Ateka", img: "https://d3mtt5j7zsc7c8.cloudfront.net/deal_images/bc5/515/256/42f/cc9/e00/105123/flat_deal_list/ateka-exterior.jpg?1437480370" },
		{ name: "8 - Taberna La Radio", img: "https://lh5.googleusercontent.com/p/AF1QipO5nyooaqZ47aFSe_QnY-JAUEZaoNDD7_aIsXB5" },
		{ name: "9 - Bar Bejerano", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXvh4VHXBlPfPg7JsRYWL8xtXAPVfhXgyUA&s" },
		{ name: "10 - Café Bar Ironside", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3DyAMx7G89dRKre1OjXKx-1ld9KZL7XwUQ&s" },
		{ name: "11 - Cafetería Latomium", img: "https://img.restaurantguru.com/rf85-Cafeteria-LAtomium-interior.jpg" },
		{ name: "12 - Cafetería Bar DamaSol", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShzxp70hThuddtcp1XVHGCp2huT2VcK52vA&s" },
		{ name: "13 - Cervecería Vicman", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqfLTb9QXsGtADkyJJYyvqx6ghGPy8hB3Fg&s" },
		{ name: "14 - Hermanos Manrique", img: "https://www.futbolrapido.es/upload/A0/6B/maza1ipd.jpg" },
		{ name: "15 - La Flor del Alta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1O7M-2PUeJ1canLwWoWBw2rKQb_mkLiNjw&s" },
		{ name: "16 - Café Bar DamaSol 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStF3Rw370r3fbVjkdolY_w65HEzxwD47Qg9g&s" },
		{ name: "17 - Café Bar Santa Olalla", img: "https://img.restaurantguru.com/r12c-Cafe-Bar-Santa-Olalla-exterior.jpg" },
		{ name: "18 - Cafetería Bemol", img: "https://www.cafeelsiglo.es/wp-content/uploads/AF1QipOmV88ijaTjGJM55LcVoALFzthYc94_ZboHJp29w408-h306-k-no.jpeg" },
		{ name: "19 - Café Antay", img: "https://img.restaurantguru.com/rc06-Antay-beverage.jpg" },
		{ name: "20 - Mesón La Cabaña", img: "https://assets.untappd.com/photos/2023_10_09/0a96152bc952d838b34b1a41ae05218e_640x640.jpg" },
		{ name: "21 - Cervecería La Rincuenca", img: "https://pbs.twimg.com/media/GRaSgX8WoAEhP6j.jpg:large" }
    ];

    const stopsList = document.getElementById("stops-list");
    const beerLevel = document.getElementById("beer-level");
    const beerCounter = document.getElementById("beer-counter");
    const completeRouteButton = document.getElementById("complete-route");
    const resultDiv = document.getElementById("result");

    // Inicializar el progreso del usuario
    function initializeProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('routeProgress')) || {};
        const savedCentiliters = savedProgress.centiliters || 0;
        const savedChecked = savedProgress.checked || {};

        stops.forEach((stop, index) => {
            const checkbox = document.getElementById(`stop-${index}`);
            if (checkbox) {
                checkbox.checked = savedChecked[index] || false;
            }
        });

        totalCentiliters = savedCentiliters;
        updateBeerDisplay();
    }

    // Crear la lista de paradas
    stops.forEach((stop, index) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `stop-${index}`;
        checkbox.classList.add("stop-checkbox");

        const label = document.createElement("label");
        label.htmlFor = `stop-${index}`;
        label.textContent = stop.name;

        const img = document.createElement("img");
        img.src = stop.img;
        img.alt = stop.name;

        listItem.appendChild(img);
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        stopsList.appendChild(listItem);
    });

    // Inicializar variables para el progreso
    let totalCentiliters = 0;

    // Función para actualizar el nivel de la cerveza y el contador
    function updateBeerDisplay() {
        const maxHeight = 200; // Altura máxima del contenedor de cerveza
        const percentage = totalCentiliters / (stops.length * 22);
        beerLevel.style.height = `${percentage * maxHeight}px`;
        beerCounter.textContent = `${totalCentiliters} cl`;
    }

    // Función para guardar el progreso en el almacenamiento local
    function saveProgress() {
        const checkedBoxes = document.querySelectorAll(".stop-checkbox");
        const checked = {};

        checkedBoxes.forEach((checkbox, index) => {
            checked[index] = checkbox.checked;
        });

        const progress = {
            centiliters: totalCentiliters,
            checked: checked
        };

        localStorage.setItem('routeProgress', JSON.stringify(progress));
    }

    // Evento para marcar cada checkbox
    stopsList.addEventListener("change", (event) => {
        if (event.target.classList.contains("stop-checkbox")) {
            if (event.target.checked) {
                totalCentiliters += 22;
            } else {
                totalCentiliters -= 22;
            }
            updateBeerDisplay();
            saveProgress();
        }
    });

    // Evento para completar la ruta
    completeRouteButton.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll(".stop-checkbox");
        let allChecked = true;

        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });

        if (allChecked) {
            resultDiv.textContent = "¡Ruta completada con éxito! Si eres capaz de leer bien este mensaje, eres un máquina";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Eres un mierdas, no has cumplido con todas las paradas.";
            resultDiv.style.color = "red";
        }

        saveProgress();
    });

    // Inicializar el progreso cuando se carga la página
    initializeProgress();
});