document.addEventListener("DOMContentLoaded", function () {
    const cartonDiv = document.querySelector(".carton2");
    const generarNumerosBtn = document.getElementById("generarNumeros");

    generarNumerosBtn.addEventListener("click", function () {
        // Limpiar el contenido actual del cartonDiv
        cartonDiv.innerHTML = "";

        // Crear un array con los números del 1 al 32
        const numeros = Array.from({ length: 32 }, (_, i) => i + 1);

        // Mezclar el array aleatoriamente
        for (let i = numeros.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
        }

        // Tomar los primeros 32 números del array mezclado y agregarlos al cartonDiv

        let listado = "";

        for (let i = 0; i < 25; i++) {
            listado += `<article class="articulo animalNumero${numeros[i]}">
                                <div class="animal">
                                    <img src="./img/(${numeros[i]}).jpg" alt="" />
                                </div>
                            </article>`;
        }

        cartonDiv.innerHTML = listado;
        clickAnimal()


    });
});
