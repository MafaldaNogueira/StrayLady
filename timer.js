class Timer {
  constructor(){
    this.currentTime = 30;
    this.intervalId = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(this.currentTime > 0){
        this.currentTime--;
      }
      if (callback) callback();
    }, 1000);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

}

class TimerRestart {
  constructor(){
    this.currentTime = 30;
    this.intervalId = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(this.currentTime > 0){
        this.currentTime--;
      }
      if (callback) callback();
    }, 1000);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

}