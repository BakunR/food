function timer (idTimer, deadLine) {
    

    function getTimeRemaining(endtime) {
        const time = Date.parse(endtime) - Date.parse(new Date()),//endtime час до якого рахує таймер - зарашній час
             days = Math.floor(time / (1000 * 60 * 60 * 24)),// переводимо час (мілісекунди) в кількість днів
             hours = Math.floor((time / (1000 * 60 *60) % 24)),//отримаємо години %24 означає шо після ділення заберає чисте чило (дні) а видає залишок до 24 годин і виводить його нам
             minutes = Math.floor((time / 1000 / 60 ) % 60),// ділимо time на кількість хвилин, і отримаємо хвостик який менше 60 (однієї хвилин)
             seconds = Math.floor((time / 1000) % 60 );
        
             return {
                'total' : time,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
             };
    }

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeIntercal = setInterval(updateClock, 1000);

        updateClock();

        function getZero (num){
            if (num >= 0 && num < 10 ) {
                return `0${num}`;
            }else {
                return num;
            }
        }


        function updateClock () {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeIntercal);
            }
        }
    }
    setClock(idTimer, deadLine);    
}
export default timer;