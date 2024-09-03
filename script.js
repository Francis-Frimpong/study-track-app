const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


let hr = 0
let min = 0
let sec = 0


function timer() {
    setInterval(() => {
    
        seconds.textContent = sec++;
        
        if (sec === 60) {
            sec = 0;
            minutes.textContent = min += 1;
        }
    },1000)
}

 document.getElementById('start-btn').addEventListener('click', timer);

