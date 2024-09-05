const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


let hr = 0
let min = 0
let sec = 1





function timer() {
    setInterval(() => {   
        seconds.textContent = sec++;

        if (sec === 60) {
            sec = 0;
            setTimeout(() => minutes.textContent = min += 1, 1000);
        }else if (min === 60) {
            min = 0;
            hour.textContent = hr += 1
        }
    },1000)


    // setInterval(() => {
    //     minutes.textContent = min++;
    //     if( min === 60) {
    //         min = 0;
    //         setTimeout(() => hour.textContent = hr += 1, 1000);
    //     }
    // }, 1000)
}




 document.getElementById('start-btn').addEventListener('click', timer);

