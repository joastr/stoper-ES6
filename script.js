class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.print();
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    save() {
        let data = document.querySelector('.stopwatch').innerHTML;
        const element = document.createElement('LI');
        let dataText = document.createTextNode(data);
        element.appendChild(dataText);
        document.querySelector('.results').appendChild(element);

    }

    resetTimeList() {
        let elem = document.querySelector('.results');
        let element = document.getElementsByTagName('LI')
        elem.parentNode.removeChild(element);
    }
    
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}


const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

let timeListButton = document.getElementById('timeListButton');


console.log('button',timeListButton);
timeListButton.addEventListener('click', () => stopwatch.save());

//let resetList = document.querySelector('#resetList');
//resetList.addEventListener('click', () => stopwatch.resetTimeList());




// timeListButton.addEventListener('click', () => 
// {
//     let data = document.querySelector('.stopwatch').innerHTML;
//     const element = document.createElement('LI');
//     let dataText = document.createTextNode(data);
//     element.appendChild(dataText);
//     document.querySelector('.results').appendChild.element
// });

