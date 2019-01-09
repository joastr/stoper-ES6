class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
        this.running = false;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this); 
        this.reset = this.reset.bind(this);
        this.save = this.save.bind(this); 
        this.resetTimeList= this.resetTimeList.bind(this);
    }

    reset() {
        this.setState ({
            times: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
            }
        });
        this.print();
    }

    print() {
       // this.display.innerText = this.format(this.times);
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
        
    }

   

    calculate() {
        const times = this.state.times;
        times.miliseconds += 1;
        if (times.miliseconds >= 100) {
            times.seconds += 1;
            times.miliseconds = 0;
        }
        if (times.seconds >= 60) {
            times.minutes += 1;
            times.seconds = 0;
        }
        this.setState({times});
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
        let el = document.querySelector('li');
        el.remove();        
    }

    render() {
        
        return (
          <div className="container">
            <nav className="controls">
                <a className="button dark" href="#" onClick={this.start}>
                    Start
                </a>
                <a className="button normal" href="#" onClick={this.stop}> 
                    Stop 
                </a>
                <a className="button light" href="#" onClick={this.reset}>
                    Reset
                </a>
                <a className="button lighter" href="#" onClick={this.save}>
                    Save results
                </a>
                <a className="button darker" href="#" onClick={this.resetTimeList}>
                    Clean results
                </a>
            </nav>
            <div className="stopwatch">
            {this.format(this.state.times)}
            </div>
            <div className="results"></div>
           
            
           
          </div>
        );
      }
}
    


function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}


const app = document.getElementById('app')
ReactDOM.render(<Stopwatch/>, app);



// const stopwatch = new Stopwatch(
// document.querySelector('.stopwatch'));

// let startButton = document.getElementById('start');
// startButton.addEventListener('click', () => stopwatch.start());

// let stopButton = document.getElementById('stop');
// stopButton.addEventListener('click', () => stopwatch.stop());

// let resetButton = document.getElementById('reset');
// resetButton.addEventListener('click', () => stopwatch.reset());

// let timeListButton = document.getElementById('timeListButton');


// console.log('button',timeListButton);
// timeListButton.addEventListener('click', () => stopwatch.save());

// let resetList = document.querySelector('#resetList');
// resetList.addEventListener('click', () => stopwatch.resetTimeList());




// timeListButton.addEventListener('click', () => 
// {
//     let data = document.querySelector('.stopwatch').innerHTML;
//     const element = document.createElement('LI');
//     let dataText = document.createTextNode(data);
//     element.appendChild(dataText);
//     document.querySelector('.results').appendChild(element);
// });

