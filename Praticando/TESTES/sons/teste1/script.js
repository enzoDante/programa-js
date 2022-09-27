const startButton = document.querySelector('#startButton'),
  stopButton = document.querySelector('#stopButton');

let context = new AudioContext(),
	oscillator = context.createOscillator();

function start(){
	startButton.style.display = 'none';
    stopButton.style.display = 'block';
	context = new AudioContext();
	oscillator = context.createOscillator();
	oscillator.type = "sine";
	oscillator.connect(context.destination);
	oscillator.start();
}

function stop(){
	startButton.style.display = 'block';
    stopButton.style.display = 'none';
	oscillator.stop(context.currentTime + 0);
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

stop();
