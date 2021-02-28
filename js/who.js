// Step function definitions

// Step 3 //
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

// Step 4 //
// Determins if the palms are together to start step 4
function step4State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 4 if the case
function step4far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

// Step 5 //
// Determins if the palms are together to start step 5
function step5State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 5 if the case
function step5far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

// Step 6 //
// Determins if the palms are together to start step 6
function step6State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 6 if the case
function step6far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

// Step 7 //
// Determins if the palms are together to start step 7
function step7State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 7 if the case
function step7far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

// Step 8 //
// Determins if the palms are together to start step 8
function step8State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 8 if the case
function step8far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

// Step 9 //
// Determins if the palms are together to start step 8
function step9State(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Determins if the palms are far away to pause step 8 if the case
function step9far(frame) {
    return frame.hands.length == 2 && 
    (Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  step3.far ||
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  step3.far)
}

class Steps {
    constructor(duration, distance, far, start = false, finish = false,
        startTime = new easytimer.Timer(), startTimeFlag = false, delayTime = new easytimer.Timer(), delayTimeFlag = false,
        img = "") {
        // duration is in milliseconds
        // distance is in millimeters
        // far is the distance that causes step to pause
        this.duration = duration;
        this.distance = distance;
        this.far = far;
        this.start = start;
        this.finish = finish;

        // timer properties
        this.startTime = startTime;
        this.startTimeFlag = startTimeFlag;
        this.delayTime = delayTime;
        this.delayTimeFlag = delayTimeFlag;

        // img properties
        this.img = img;
    }
}

// WHO step objects initialized
let step1 = new Steps(6000, 70, 150);
let step2 = new Steps(6000, 70, 150);
let step3 = new Steps(6000, 70, 150);
let step4 = new Steps(6000, 70, 150);
let step5 = new Steps(6000, 70, 150);
let step6 = new Steps(6000, 70, 150);
let step7 = new Steps(6000, 70, 150);
let step8 = new Steps(6000, 70, 150);
let step9 = new Steps(6000, 70, 150);
let step10 = new Steps(6000, 70, 150);
let step11 = new Steps(6000, 70, 150);
let step12 = new Steps(6000, 70, 150);
let step13 = new Steps(6000, 70, 150);;

let step = [null, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, step11, step12, step13];

// Reset step objects
function resetSteps() {
    for (let i = 1; i <= 13; i++) {
        step[i].start = false;
        step[i].finish = false;
        step[i].startTime = new easytimer.Timer();
        step[i].startTimeFlag = false;
        step[i].delayTime = new easytimer.Timer();
        step[i].delayTimeFlag = false;
    }
}

// Main DOM element to display the page
var stepBox = document.getElementById('box').className = "shadow-sm p-3 mb-5 bg-success rounded";

var stepOutput = document.getElementById('steps');

var progressBar;

let width = 400;
let height = 400;
step1.img = "<img src = './img/step1.png' width=" + width + " height=" + height + ">";
step2.img = "<img src = './img/step2.png' width=" + width + " height=" + height + ">";
step3.img = "<img src = './img/step3.png' width=" + width + " height=" + height + ">";
step4.img = "<img src = './img/step4.png' width=" + width + " height=" + height + ">";
step5.img = "<img src = './img/step5.png' width=" + width + " height=" + height + ">";
step6.img = "<img src = './img/step6.png' width=" + width + " height=" + height + ">";
step7.img = "<img src = './img/step7.png' width=" + width + " height=" + height + ">";
step8.img = "<img src = './img/step8.png' width=" + width + " height=" + height + ">";
step9.img = "<img src = './img/step9.png' width=" + width + " height=" + height + ">";
step10.img = "<img src = './img/step10.png' width=" + width + " height=" + height + ">";
step11.img = "<img src = './img/step11.png' width=" + width + " height=" + height + ">";
step12.img = "<img src = './img/step12.png' width=" + width + " height=" + height + ">";
step13.img = "<img src = './img/step13.png' width=" + width + " height=" + height + ">";

function introText() {
    stepOutput.innerHTML = 'Please wet your hands to get started!' + '<br><br>' + 'Follow the instructions from image to wash your hands correctly.'
    + '<br><br>' + step1.img + ' ' + step2.img;
}

function stepText(stepNum) {
    stepOutput.innerHTML = 'Step ' + stepNum + ' started.' + '<br>' + step[stepNum].img + '<br>';
}

function timeRemainText(stepNum) {
    let num = (6 - step[stepNum].startTime.getTimeValues().seconds) / 6 * 100;
    stepOutput.innerHTML += '<br>' + 'Time remaining: ' + step[stepNum].startTime.getTimeValues().seconds + '<br><br>';
    progressBar = '<div class="progress" style="height: 20px; width: 600px;" ><div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"' + num + '\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ' + num + '%\"></div></div>'
    stepOutput.innerHTML += progressBar;
}

function farHandsText() {
    stepOutput.innerHTML = '<br>' + 'Please put your hands together to wash your palms' + '<br>';
}

function resumeText() {
    stepOutput.innerHTML += 'Resuming...';
}

function finishText() {
    stepOutput.innerHTML = 'Done. Please rinse and dry your hands!';
}

function resetText() {
    stepOutput.innerHTML = 'Resetting...';
    setTimeout(introText(), 5000);
}

function tooManyHandsText() {
    stepOutput.innerHTML = 'More than two hands detected. Only one user allowed';
}

// Counter for number of steps
var i = 3;

introText();

Leap.loop({enableGestures: true}, function(frame) {
    if (frame.hands.length > 2) {
        tooManyHandsText();
    }
    // Circle gesture for reset
    if (frame.gestures.length == 1 && frame.gestures[0].type === "circle" &&
        frame.gestures[0].duration > 3000000 ) { // in microseconds
        resetSteps();
        resetText();
        i = 3;
    }
    // Step 1
    if (step[i] === step1) {
    }
    // Step 2
    if (step[i] === step2) {
    }
    // Step 3
    if (step[i] === step3) {
        if (step3.finish) {
            i++;
        }
        // Text displays
        if (step3.delayTimeFlag) {
            stepText(3);
        }
        if (step3.startTimeFlag && step3.delayTime.getTimeValues().seconds >= 2) {
            step3.startTime.start();
            timeRemainText(3);
            if (step3.startTime.getTimeValues().seconds <= 0) {
                step3.finish = true;
            }
        }
        if (step3.delayTimeFlag && step3.delayTime.getTimeValues().seconds < 2) {
            step3.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step3State(frame)) {
            step3.start = true;
            if (!step3.delayTimeFlag) {
                step3.delayTime.start();
                step3.delayTimeFlag = true;
                step3.startTime.start({countdown: true, startValues: {seconds: 8}});
                step3.startTimeFlag = true;
            }
        } else if (step3.start && step3far(frame)) {
            step3.startTime.pause();
            step3.delayTime.reset();
            farHandsText();
        }
    }
    // Step 4
    if (step[i] === step4) {
        if (step4.finish) {
            i++;
        }
        // Text displays
        //if (step4.delayTimeFlag) {
            stepText(4);
        //}
        if (step4.startTimeFlag && step4.delayTime.getTimeValues().seconds >= 2) {
            step4.startTime.start();
            timeRemainText(4);
            if (step4.startTime.getTimeValues().seconds <= 0) {
                step4.finish = true;
            }
        }
        if (step4.delayTimeFlag && step4.delayTime.getTimeValues().seconds < 2) {
            step4.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step4State(frame)) {
            step4.start = true;
            if (!step4.delayTimeFlag) {
                step4.delayTime.start();
                step4.delayTimeFlag = true;
                step4.startTime.start({countdown: true, startValues: {seconds: 8}});
                step4.startTimeFlag = true;
            }
        } else if (step4.start && step4far(frame)) {
            step4.startTime.pause();
            step4.delayTime.reset();
            farHandsText();
        }
    }
    // Step 5
    if (step[i] === step5) {
        if (step5.finish) {
            i++;
        }
        // Text displays
        //if (step5.delayTimeFlag) {
            stepText(5);
        //}
        if (step5.startTimeFlag && step5.delayTime.getTimeValues().seconds >= 2) {
            step5.startTime.start();
            timeRemainText(5);
            if (step5.startTime.getTimeValues().seconds <= 0) {
                step5.finish = true;
            }
        }
        if (step5.delayTimeFlag && step5.delayTime.getTimeValues().seconds < 2) {
            step5.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step5State(frame)) {
            step5.start = true;
            if (!step5.delayTimeFlag) {
                step5.delayTime.start();
                step5.delayTimeFlag = true;
                step5.startTime.start({countdown: true, startValues: {seconds: 8}});
                step5.startTimeFlag = true;
            }
        } else if (step5.start && step5far(frame)) {
            step5.startTime.pause();
            step5.delayTime.reset();
            farHandsText();
        }
    }
    // Step 6
    if (step[i] === step6) {
        if (step6.finish) {
            i++;
        }
        // Text displays
        //if (step6.delayTimeFlag) {
            stepText(6);
        //}
        if (step6.startTimeFlag && step6.delayTime.getTimeValues().seconds >= 2) {
            step6.startTime.start();
            timeRemainText(6);
            if (step6.startTime.getTimeValues().seconds <= 0) {
                step6.finish = true;
            }
        }
        if (step6.delayTimeFlag && step6.delayTime.getTimeValues().seconds < 2) {
            step6.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step6State(frame)) {
            step6.start = true;
            if (!step6.delayTimeFlag) {
                step6.delayTime.start();
                step6.delayTimeFlag = true;
                step6.startTime.start({countdown: true, startValues: {seconds: 8}});
                step6.startTimeFlag = true;
            }
        } else if (step6.start && step6far(frame)) {
            step6.startTime.pause();
            step6.delayTime.reset();
            farHandsText();
        }
    }
    // Step 7
    if (step[i] === step7) {
        if (step7.finish) {
            i++;
        }
        // Text displays
        //if (step7.delayTimeFlag) {
            stepText(7);
        //}
        if (step7.startTimeFlag && step7.delayTime.getTimeValues().seconds >= 2) {
            step7.startTime.start();
            timeRemainText(7);
            if (step7.startTime.getTimeValues().seconds <= 0) {
                step7.finish = true;
            }
        }
        if (step7.delayTimeFlag && step7.delayTime.getTimeValues().seconds < 2) {
            step7.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step7State(frame)) {
            step7.start = true;
            if (!step7.delayTimeFlag) {
                step7.delayTime.start();
                step7.delayTimeFlag = true;
                step7.startTime.start({countdown: true, startValues: {seconds: 8}});
                step7.startTimeFlag = true;
            }
        } else if (step7.start && step7far(frame)) {
            step7.startTime.pause();
            step7.delayTime.reset();
            farHandsText();
        }
    }
    // Step 8
    if (step[i] === step8) {
        if (step8.finish) {
            i++;
        }
        // Text displays
        //if (step8.delayTimeFlag) {
            stepText(8);
        //}
        if (step8.startTimeFlag && step8.delayTime.getTimeValues().seconds >= 2) {
            step8.startTime.start();
            timeRemainText(8);
            if (step8.startTime.getTimeValues().seconds <= 0) {
                step8.finish = true;
            }
        }
        if (step8.delayTimeFlag && step8.delayTime.getTimeValues().seconds < 2) {
            step8.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step8State(frame)) {
            step8.start = true;
            if (!step8.delayTimeFlag) {
                step8.delayTime.start();
                step8.delayTimeFlag = true;
                step8.startTime.start({countdown: true, startValues: {seconds: 8}});
                step8.startTimeFlag = true;
            }
        } else if (step8.start && step8far(frame)) {
            step8.startTime.pause();
            step8.delayTime.reset();
            farHandsText();
        }
    }
    // Step 9
    if (step[i] === step9) {
        if (step9.finish) {
            i++;
        }
        // Text displays
        //if (step9.delayTimeFlag) {
            stepText(9);
        //}
        if (step9.startTimeFlag && step9.delayTime.getTimeValues().seconds >= 2) {
            step9.startTime.start();
            timeRemainText(9);
            if (step9.startTime.getTimeValues().seconds <= 0) {
                step9.finish = true;
            }
        }
        if (step9.delayTimeFlag && step9.delayTime.getTimeValues().seconds < 2) {
            step9.delayTime.start();
            resumeText();
        }
        // Check if palms are close or not
        if (step9State(frame)) {
            step9.start = true;
            if (!step9.delayTimeFlag) {
                step9.delayTime.start();
                step9.delayTimeFlag = true;
                step9.startTime.start({countdown: true, startValues: {seconds: 8}});
                step9.startTimeFlag = true;
            }
        } else if (step9.start && step9far(frame)) {
            step9.startTime.pause();
            step9.delayTime.reset();
            farHandsText();
        }
    }
    // Step 10
    if (step[i] === step10) {
        finishText();
    }
    // Step 11
    if (step[i] === step11) {
    }
    // Step 12
    if (step[i] === step12) {
    }
});
