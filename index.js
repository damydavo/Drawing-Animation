class Timer {
  constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
      this.tick()
      this.intervalId = setInterval(this.tick, 1000)
  } 

  tick = () => {

    this.timeRemaining <= 0 ? this.pause() : this.timeRemaining = this.timeRemaining - 1
  } 

    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
    
    set timeRemaining(time) {
       return this.durationInput.value = time
    }

  pause = () => {
    clearInterval(this.intervalId)
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

