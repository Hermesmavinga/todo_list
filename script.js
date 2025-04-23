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



  const htmlEl   = document.documentElement;
  const toggle   = document.getElementById('theme-toggle');
  const icon     = document.getElementById('theme-icon');

  // Applique la préférence stockée ou thème système
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' ||
      (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
    icon.classList.replace('fa-sun', 'fa-moon');
  }

  toggle.addEventListener('click', () => {
    const dark = htmlEl.classList.toggle('dark');
    icon.classList.replace(dark ? 'fa-sun' : 'fa-moon', dark ? 'fa-moon' : 'fa-sun');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });







