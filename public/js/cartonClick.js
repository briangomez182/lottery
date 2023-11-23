function clickAnimal() {
    const animalitos = document.querySelectorAll(".articulo");

    animalitos.forEach((animal) => {
        animal.addEventListener("click", function () {

        let claseBuscada = animal.classList[1];

        let animalesSeleccionados = document.querySelectorAll(`.${claseBuscada}`);

        animalesSeleccionados.forEach(e => {
            e.classList.toggle("seleccionado");
        });
        });
    });

}


function conservar() {
    const animalitos = document.querySelectorAll(".articulo");

    animalitos.forEach(animal => {
        animal.classList.remove("seleccionado")
    });
}
