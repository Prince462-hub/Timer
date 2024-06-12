let hr = document.getElementById('hr')
for (let i = 0; i < 24; i++) {
    hr.insertAdjacentHTML('beforeend', `<option value=${i}>${i}</option>`)
}
let min = document.getElementById('min')
for (let i = 0; i < 60; i++) {
    min.insertAdjacentHTML('beforeend', `<option value=${i}>${i}</option>`)
}
let sec = document.getElementById('sec')
for (let i = 0; i < 60; i++) {
    sec.insertAdjacentHTML('beforeend', `<option value=${i}>${i}</option>`)
}
let start = document.querySelector('button')
start.addEventListener('click', timerStart)
function timerStart() {
    let hr1 = document.getElementById('hr').value
    let min1 = document.getElementById('min').value
    let sec1 = document.getElementById('sec').value
    let myaudio = new Audio('ringtone.mpeg')
    let a = setInterval(timer, 1000)
    function timer() {
        if (hr1 == 0 && min1 == 0 && sec1 == 0) {
            clearInterval(a)
            function playMusic() {
                myaudio.play()
            }
            playMusic()
        }
        else {
            sec1 = sec1 - 1;
            if (min1 > 0 && sec1 < 0) {
                min1 = min1 - 1
                sec1 = 59
            }
            else if (hr1 > 0 && min1 < 0) {
                hr1 = hr1 - 1
                min1 = 59
            }
            else if (hr1 > 0 && min1 == 0 && sec1 < 0) {
                hr1 = hr1 - 1
                min1 = 59
                sec1 = 59
            }
        }
        let stop = document.getElementById('stop')
        stop.addEventListener('click', () => {
            clearInterval(a)
            function pauseMusic() {
                myaudio.pause()
            }
            pauseMusic()

        })
        hr.value = hr1
        min.value = min1
        sec.value = sec1
    }
}