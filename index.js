class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
         if(callbacks) {
          this.onStart = callbacks.onStart
          this.onTick = callbacks.onTick
          this.onComplete = callbacks.onComplete
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if(this.onStart) {
        this.onStart()
    }

      this.tick()
      this.intervalId = setInterval(this.tick, 50)
  } 

  tick = () => {
    if(this.timeRemaining <= 0) {
      this.pause()
      if(this.onComplete) {
           this.onComplete();
      }
    } else {
     this.timeRemaining = this.timeRemaining - 0.05 
     if(this.onTick) {
         this.onTick()
     }

    }

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

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)


let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer has just started')
  },

  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset)
    currentOffset = currentOffset - 1
  },

  onComplete() {
    console.log("Timer was completed")
  }
});

