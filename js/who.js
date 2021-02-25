class Steps {
    constructor(duration, distance, far, start = false, finish = false) {
        // duration is in milliseconds
        // distance is in millimeters
        // far is the distance that causes step to pause
        this.duration = duration;
        this.distance = distance;
        this.far = far;
        this.start = start;
        this.finish = finish;
    }
}

// Main DOM element to display the page
var stepOutput = document.getElementById('steps');


var img = "<img src = './img/step3.jpg' width=500 height=500>";

// WHO step objects initialized
let step3 = new Steps(6000, 70, 150);
let step4 = new Steps(6000, 70);
let step5 = new Steps(6000, 70);
let step6 = new Steps(6000, 70);
let step7 = new Steps(6000, 70);
let step8 = new Steps(6000, 70);

let step = [null, null, null, step3, step4, step5, step6, step7, step8];

// Variables for timers and timer flags
let timeout = 60000;
let startTime = new easytimer.Timer();
let startTimeFlag = false;
let currentTime;
let endTime;
let delayTime = new easytimer.Timer();
let delayTimeFlag = false;
let starterFlag = false;
let timerFlag = false;

// Counter for number of steps
var i = 3;

// Determins if the palms are together to start step 3
function step3State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 3 if the case
function step3far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

stepOutput.innerHTML = 'Currently only step 3 of WHO guidline is implemented (Palm washing).' + '<br><br>' + 'Place your palms together to get started.';

Leap.loop({enableGestures: true}, function(frame) {
    if (frame.hands.length > 2) {
        stepOutput.innerHTML = 'More than two hands detected. Only one user allowed';
    }
    // Step 3
    if (step[i] === step3) {
        if (step[i].finish) {
            i++;
        }
        // Text displays
        if (delayTimeFlag) {
            stepOutput.innerHTML = 'Step 3 started.' + '<br>' + img + '<br>';
        }
        if (startTimeFlag && delayTime.getTimeValues().seconds >= 2) {
            startTime.start();
            stepOutput.innerHTML += '<br>' + 'Time remaining: ' + startTime.getTimeValues().seconds + '<br>';
            if (startTime.getTimeValues().seconds <= 0) {
                step[i].finish = true;
            }
        }
        if (delayTimeFlag && delayTime.getTimeValues().seconds < 2) {
            delayTime.start();
            stepOutput.innerHTML += 'Resuming...';
        }
        // Check if palms are close or not
        if (step3State(frame)) {
            step[i].start = true;
            if (!delayTimeFlag) {
                delayTime.start();
                delayTimeFlag = true;
                startTime.start({countdown: true, startValues: {seconds: 8}});
                startTimeFlag = true;
            }
        } else if (step[i].start && step3far(frame)) {
            startTime.pause();
            delayTime.reset();
            stepOutput.innerHTML = '<br>' + 'Please put your hands together to wash your palms' + '<br>';
        }
    }
    // Step 4
    if (step[i] === step4) {
        stepOutput.innerHTML = 'Done. Implementation of other steps working in progress...';
    }
});
