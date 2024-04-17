function spaceTimer() {
    function criadorDoTempoEmSegundos(segundos) {
        const date = new Date(segundos * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const countTimer = document.querySelector(".timer");
    const startTimer = document.querySelector(".iniciar");
    const pauseTimer = document.querySelector(".pausar");
    const zeroTimer = document.querySelector(".zerar");
    const titleTimer = document.querySelector(".title")

    let segundos = 0;
    let titleSegundos = 0;
    let alteradorDeNumbTimer;
    let alteradorDeNumbTimerTitle;

    function iniciarRelogio() {
        alteradorDeNumbTimer = setInterval(function () {
            segundos++;
            countTimer.innerHTML = criadorDoTempoEmSegundos(segundos);
        }, 1000);
    }

    function iniciarRelogioTitle() {
        alteradorDeNumbTimerTitle = setInterval(function () {
            titleSegundos++;
            titleTimer.innerHTML = criadorDoTempoEmSegundos(titleSegundos);
        }, 1000);
    }

    startTimer.addEventListener("click", function () {
        clearInterval(alteradorDeNumbTimer);
        clearInterval(alteradorDeNumbTimerTitle);
        iniciarRelogioTitle();
        iniciarRelogio();
        startTimer.innerHTML = "Iniciar";
    })

    pauseTimer.addEventListener("click", function () {
        clearInterval(alteradorDeNumbTimer);
        clearInterval(alteradorDeNumbTimerTitle);
        startTimer.innerHTML = "Continuar";
    })

    zeroTimer.addEventListener("click", function () {
        clearInterval(alteradorDeNumbTimer);
        clearInterval(alteradorDeNumbTimerTitle);
        countTimer.innerHTML = '00:00:00';
        titleTimer.innerHTML = '00:00:00';
        segundos = 0;
        titleSegundos = 0;
    })
}
spaceTimer();