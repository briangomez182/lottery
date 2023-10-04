const lotteryResults    = document.getElementById("lotteryResults");
const lotteryImg        = document.getElementById("lotteryImg");
const startButton       = document.getElementById("startButton");
const winSound          = document.getElementById("winSound"); // El elemento de audio
let intervalId;
const usedNumbers = new Set();

startButton.addEventListener("click", () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        startButton.textContent = "Iniciar Lotería";
        usedNumbers.clear(); // Limpiar los números usados al detener la lotería
    } else {
        startButton.textContent = "Detener Lotería";

        // Generar el primer número de inmediato
        generateRandomNumberAndDisplay();

        // Establecer el intervalo para los siguientes números
        intervalId = setInterval(generateRandomNumberAndDisplay, 30000); // 30 segundos
    }
});

function generateRandomNumberAndDisplay() {
    if (usedNumbers.size >= 32) {
        // Si todos los números han sido seleccionados, deten la lotería
        clearInterval(intervalId);
        intervalId = null;
        startButton.textContent = "Iniciar Lotería";
        alert("¡Se han sorteado todos los números!");
        return;
    }

    let randomNumber;
    do {
        // Generar un número aleatorio único
        randomNumber = Math.floor(Math.random() * 32) + 1;
    } while (usedNumbers.has(randomNumber)); // Repetir si el número ya ha sido sorteado

    const image = document.createElement("img");
    image.src = `./img/(${randomNumber}).jpg`; // Reemplaza con la ruta de tus imágenes
    lotteryResults.appendChild(image);

    lotteryImg.src = `./img/(${randomNumber}).jpg`;
    lotteryImg.style.display = "block";

    // Reproducir el sonido
    winSound.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    winSound.play();

   

    // Agregar el número sorteado al conjunto de números usados
    usedNumbers.add(randomNumber);
}
