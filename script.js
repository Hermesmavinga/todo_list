let myBtn = document.getElementById('myBtn');
let myInput = document.getElementById('Task');
let taskContainer = document.getElementById('taskContainer');

myBtn.addEventListener('click', () => {
    if (myInput.value !== "") {
        let paragraphe = document.createElement('p');
        paragraphe.textContent = myInput.value;
        paragraphe.classList.add('paragraphe')
        paragraphe.addEventListener('click', () => {
            if (paragraphe.style.textDecoration === "line-through") {
                paragraphe.style.textDecoration = "none";
            } else {
                paragraphe.style.textDecoration = "line-through";
            }
        });
        paragraphe.addEventListener('dblclick', () => {
            taskContainer.removeChild(paragraphe);
        });

        taskContainer.appendChild(paragraphe);

        // Effacer le champ de saisie
        myInput.value = "";
    } else {
        alert("Veuillez entrer une tâche !");
    }
});






