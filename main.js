const aceita = document.querySelector('#aceita')
const recusou = document.querySelector('#recusou')
const aceitouSound = document.querySelector("#aceitouSound")
const recusouSound = document.querySelector("#recusouSound")

const backgroundMusic = document.querySelector('#backgroundMusic')

const chipChapa = document.querySelector('#chipChapa')
const chipChapaSound = document.querySelector('#chipChapaSound')
const loucoSonhador = document.querySelector('#loucoSonhador')

aceita.addEventListener('click', function () {
    recusouSound.pause()
    recusouSound.currentTime = 0
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    loucoSonhador.style.display = 'none'

    aceitouSound.play()

    chipChapa.style.display = 'block'
    chipChapaSound.play()
    chipChapaSound.addEventListener('ended', function () {
        this.currentTime = 0
        this.play()
    }, false)
})

recusou.addEventListener('click', function () {
    aceitouSound.pause()
    aceitouSound.currentTime = 0
    backgroundMusic.pause()
    backgroundMusic.currenTime = 0
    chipChapaSound.pause();
    chipChapaSound.currentTime = 0
    chipChapa.style.display = 'none'

    recusouSound.play()
    loucoSonhador.style.display = 'block'
    recusouSound.addEventListener('ended', function () {
        this.currentTime = 0
        this.play()
    }, false)
})
