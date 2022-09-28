const stopButton1 = document.querySelector('#stopButton1'),
stopButton2 = document.querySelector('#stopButton2'),
stopButton3 = document.querySelector('#stopButton3'),
stopButton4 = document.querySelector('#stopButton4'),
stopButton5 = document.querySelector('#stopButton5'),
stopButton6 = document.querySelector('#stopButton6'),
stopButton7 = document.querySelector('#stopButton7');
  
const c4 = 261.6,
d4 = 293.7,
e4 = 329.6,
f4 = 349.2,
g4 = 392.0,
a4 = 440.0,
b4 = 493.9;

  	
let context,
oscillator,
contextGain,
x = 1,
type = 'sine',
frequency;
  
//context.allow = 'autoplay'
context = new AudioContext();
function start(){
  oscillator = context.createOscillator();
  contextGain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  oscillator.connect(contextGain);
  contextGain.connect(context.destination);
  oscillator.start(0);
}

function stop(){
    start();
    contextGain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + x)
}
function c(){
    frequency = c4;
    stop();
}
function d(){
    frequency = d4;
    stop();
}
function e(){
    frequency = e4;
    stop();
}
function f(){
    frequency = f4;
    stop();
}
function g(){
    frequency = g4;
    stop();
}
function a(){
    frequency = a4;
    stop();
}
function b(){
    frequency = b4;
    stop();
}
/*
stopButton1.addEventListener('click', function(){
	frequency = c4;
  stop();
});
stopButton2.addEventListener('click', function(){
	frequency = d4;
  stop();
});
stopButton3.addEventListener('click', function(){
	frequency = e4;
  stop();
});
stopButton4.addEventListener('click', function(){
	frequency = f4;
  stop();
});
stopButton5.addEventListener('click', function(){
	frequency = g4;
  stop();
});
stopButton6.addEventListener('click', function(){
	frequency = a4;
  stop();
});
stopButton7.addEventListener('click', function(){
	frequency = b4;
  stop();
});*/