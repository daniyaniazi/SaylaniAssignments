// setInterval(function() {
//     console.log('running...');
// }, 1000)



setTimeout(function() {
        console.log('time out running');
    }, 3000) //one time

//stop the interval
var interval;
var count = 0;
interval = setInterval(function() {
    count++;
    console.log('running...', count);
}, 1000)

setTimeout(() => {
    clearInterval(interval)
    console.log('interval has been cleared')
}, 5000);