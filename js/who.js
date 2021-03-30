// Step function definitions
function isPalmsTogether(frame) {
    return frame.hands.length == 2 && 
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step3.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step3.distance
}

// Step 3 //
// Determins if the palms are together to start step 3
function step3State(frame) {
    return isPalmsTogether(frame) &&
    (Math.abs(frame.hands[0].palmVelocity[0] > 100) || Math.abs(frame.hands[0].palmVelocity[1] > 100) || Math.abs(frame.hands[0].palmVelocity[2] > 100)) &&
    (Math.abs(frame.hands[1].palmVelocity[0] > 100) || Math.abs(frame.hands[1].palmVelocity[1] > 100) || Math.abs(frame.hands[1].palmVelocity[2] > 100))
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
    return isPalmsTogether(frame) && frame.hands.length == 2 &&
    ((frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0) ||
    (frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0)) &&
    (Math.abs(frame.hands[0].palmVelocity[0] > 100) || Math.abs(frame.hands[0].palmVelocity[1] > 100) || Math.abs(frame.hands[0].palmVelocity[2] > 100)) &&
    (Math.abs(frame.hands[1].palmVelocity[0] > 100) || Math.abs(frame.hands[1].palmVelocity[1] > 100) || Math.abs(frame.hands[1].palmVelocity[2] > 100))
}

// Determins if the palms are far away to pause step 4 if the case
function step4far(frame) {
    return step3far(frame)
}

// Step 5 //
// Determins if the palms are together to start step 5
function step5State(frame) {
    return isPalmsTogether(frame) && frame.hands.length == 2 &&
    !((frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0) ||
    (frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] >= 0 && frame.hands[1].palmNormal[0] >= 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] >= 0 && frame.hands[1].palmNormal[1] >= 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] >= 0 && frame.hands[1].palmNormal[2] >= 0) ||
    (frame.hands[0].palmNormal[0] < 0 && frame.hands[1].palmNormal[0] < 0 &&
    frame.hands[0].palmNormal[1] < 0 && frame.hands[1].palmNormal[1] < 0 &&
    frame.hands[0].palmNormal[2] < 0 && frame.hands[1].palmNormal[2] < 0)) &&
    (Math.abs(frame.hands[0].palmVelocity[0] > 100) || Math.abs(frame.hands[0].palmVelocity[1] > 100) || Math.abs(frame.hands[0].palmVelocity[2] > 100)) &&
    (Math.abs(frame.hands[1].palmVelocity[0] > 100) || Math.abs(frame.hands[1].palmVelocity[1] > 100) || Math.abs(frame.hands[1].palmVelocity[2] > 100))
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
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step6.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step6.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step6.distance &&
    (Math.abs(frame.hands[0].palmVelocity[0] > 100) || Math.abs(frame.hands[0].palmVelocity[1] > 100) || Math.abs(frame.hands[0].palmVelocity[2] > 100)) &&
    (Math.abs(frame.hands[1].palmVelocity[0] > 100) || Math.abs(frame.hands[1].palmVelocity[1] > 100) || Math.abs(frame.hands[1].palmVelocity[2] > 100))

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
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step7.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step7.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step7.distance &&
    (Math.abs(frame.hands[0].palmVelocity[0] > 30) || Math.abs(frame.hands[0].palmVelocity[1] > 100) || Math.abs(frame.hands[0].palmVelocity[2] > 30)) &&
    (Math.abs(frame.hands[1].palmVelocity[0] > 30) || Math.abs(frame.hands[1].palmVelocity[1] > 100) || Math.abs(frame.hands[1].palmVelocity[2] > 30)) &&
    ((frame.hands[0].fingers.length > 3 &&
    frame.hands[0].fingers[0].extended &&
    frame.hands[0].fingers[1].extended &&
    frame.hands[0].fingers[2].extended &&
    frame.hands[0].fingers[3].extended) || 
    (frame.hands[1].fingers.length > 3 &&
    frame.hands[1].fingers[0].extended &&
    frame.hands[1].fingers[1].extended &&
    frame.hands[1].fingers[2].extended &&
    frame.hands[1].fingers[3].extended))
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
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step8.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step8.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step8.distance &&
    ((Math.abs(frame.hands[0].palmVelocity[0] > 60) || Math.abs(frame.hands[0].palmVelocity[1] > 60) || Math.abs(frame.hands[0].palmVelocity[2] > 60)) ||
    (Math.abs(frame.hands[1].palmVelocity[0] > 60) || Math.abs(frame.hands[1].palmVelocity[1] > 60) || Math.abs(frame.hands[1].palmVelocity[2] > 60))) &&
    ((frame.hands[0].fingers.length > 4 &&
    frame.hands[0].fingers[0].extended &&
    frame.hands[0].fingers[1].extended &&
    frame.hands[0].fingers[2].extended &&
    frame.hands[0].fingers[3].extended &&
    frame.hands[0].fingers[4].extended) || 
    (frame.hands[1].fingers.length > 4 &&
    frame.hands[1].fingers[0].extended &&
    frame.hands[1].fingers[1].extended &&
    frame.hands[1].fingers[2].extended &&
    frame.hands[1].fingers[3].extended &&
    frame.hands[1].fingers[4].extended))
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
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) <  step9.distance &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) <  step9.distance &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) <  step9.distance &&
    Math.abs(frame.hands[0].palmPosition[0] - frame.hands[1].palmPosition[0]) >  20 &&
    Math.abs(frame.hands[0].palmPosition[1] - frame.hands[1].palmPosition[1]) >  20 &&
    Math.abs(frame.hands[0].palmPosition[2] - frame.hands[1].palmPosition[2]) >  20 &&
    ((Math.abs(frame.hands[0].palmVelocity[0] > 60) || Math.abs(frame.hands[0].palmVelocity[1] > 60) || Math.abs(frame.hands[0].palmVelocity[2] > 60)) ||
    (Math.abs(frame.hands[1].palmVelocity[0] > 60) || Math.abs(frame.hands[1].palmVelocity[1] > 60) || Math.abs(frame.hands[1].palmVelocity[2] > 60))) &&
    ((frame.hands[0].fingers.length > 4 &&
    frame.hands[0].fingers[0].extended &&
    frame.hands[0].fingers[1].extended &&
    frame.hands[0].fingers[2].extended &&
    frame.hands[0].fingers[3].extended &&
    frame.hands[0].fingers[4].extended) || 
    (frame.hands[1].fingers.length > 4 &&
    frame.hands[1].fingers[0].extended &&
    frame.hands[1].fingers[1].extended &&
    frame.hands[1].fingers[2].extended &&
    frame.hands[1].fingers[3].extended &&
    frame.hands[1].fingers[4].extended))
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
let step1 = new Steps(6000, 90, 150);
let step2 = new Steps(6000, 90, 150);
let step3 = new Steps(6000, 90, 150);
let step4 = new Steps(6000, 90, 150);
let step5 = new Steps(6000, 90, 150);
let step6 = new Steps(6000, 100, 150);
let step7 = new Steps(6000, 100, 150);
let step8 = new Steps(6000, 90, 150);
let step9 = new Steps(6000, 120, 150);
let step10 = new Steps(6000, 90, 150);
let step11 = new Steps(6000, 90, 150);
let step12 = new Steps(6000, 90, 150);
let step13 = new Steps(6000, 90, 150);;

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
var stepBox = document.getElementById('box'); //.className = "shadow-sm p-3 mb-5 bg-danger rounded";

var stepOutput = document.getElementById('steps');

//document.getElementById("btn").style.opacity;
// For button
/* function skipStep() {
    resetSteps();
    //resetText();
    i++;
    if (i > 9) {
        i = 3;
    }
}
document.getElementById("skip").addEventListener("click", skipStep); */

var progressBar;

let width = 400;
let height = 400;
let smile = "<img src = './img/smile-unscreen.gif' width=" + width + " height=" + height + ">";
let begStep = "<img src = './img/begStep.gif' width=" + width + " height=" + height + ">"
let celeb = "<img src = './img/celebrate.gif' width=" + width + " height=" + height + ">"
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
    stepOutput.innerHTML = '<span style="font-size: 150%">Please <b style="color: DarkSlateBlue">wet</b> and <b style="color: DarkSlateBlue">soap</b> your hands to get started!</span>' + '<br><br>' +
                           'This will complete the <b style="color: Salmon">steps 1 and 2</b> out of <b style="color: Salmon">10</b> handwashing steps' + '<br>' +
                           'Follow the instructions from the images to wash your hands correctly' +
                           '<br><br>' + begStep;
}

function stepText(stepNum) {
    if (stepNum === 3) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: Tomato">Step ' + stepNum + '</span><br>' + 'Rub hands <span style="color: Tomato">palm to palm</span> in a circular motion.' + '<br><br><br>' + step[stepNum].img + '<br>';
    } else if (stepNum == 4) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: SteelBlue">Step ' + stepNum + '</span><br>' + 'Clean the <span style="color: SteelBlue">back of each hand</span> with the palm of your opposite hand.' + '<br><br><br>' + step[stepNum].img + '<br>';
    } else if (stepNum == 5) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: Orchid">Step ' + stepNum + '</span><br>' + 'Scrub <span style="color: Orchid">between your fingers</span> by interlacing your fingers' + '<br>' + 'Then rubbing back and forth.' + '<br><br>' + step[stepNum].img + '<br>';
    } else if (stepNum == 6) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: Navy">Step ' + stepNum + '</span><br>' + 'Clean the <span style="color: Navy">back of your fingers</span> by rubbing your interlocked fingers into your palm.'  + '<br>' + 'Repeat for both hands.' + '<br><br>' + step[stepNum].img + '<br>';
    } else if (stepNum == 7) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: Tomato">Step ' + stepNum + '</span><br>' + 'Clean around <span style="color: Tomato">each thumb</span> with your opposite hand.' + '<br><br><br>' + step[stepNum].img + '<br>';
    } else if (stepNum == 8) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: MediumPurple">Step ' + stepNum + '</span><br>' + 'Rub your <span style="color: MediumPurple">fingertips</span> into the palm of your opposite hand.' + '<br>' + 'Repeat for both hands.' + '<br><br>' + step[stepNum].img + '<br>';
    } else if (stepNum == 9) {
        stepOutput.innerHTML = '<span style="font-size: 150%; color: Orchid">Step ' + stepNum + '</span><br>' + 'Wash <span style="color: Orchid">each wrist</span> with your opposite hand.' + '<br><br><br>' + step[stepNum].img + '<br>';
    }
}

function timeRemainText(stepNum) {
    stepOutput.innerHTML += '<br>' + 'Time remaining: ' + step[stepNum].startTime.getTimeValues().seconds + '<br><br>';
}

function progressbarText(stepNum, bg = "") {
    let num = ((6 - step[stepNum].startTime.getTimeValues().seconds) / 6 * 100);
    progressBar = '<div class="progress" style="height: 20px; width: 600px;" ><div class=\"progress-bar ' + bg + ' progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"' + num + '\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ' + num + '%\"></div></div>'
    stepOutput.innerHTML += progressBar;
}

function farHandsText(stepNum) {
    stepOutput.innerHTML = '<span style="font-size: 150%; color: Red">Wait!</span>' + '<br>' +'Please put your hands together to continue.' + '<br><br><br>' + step[stepNum].img + '<br>';
    stepOutput.innerHTML += '<br>' + 'Paused' + '<br><br>';
    progressbarText(stepNum, "bg-danger");
}

/* function resumeText(stepNum) {
    stepOutput.innerHTML += '<br>' + 'Resuming...' + '<br><br>';
    progressbarText(stepNum);
} */

function finishText() {
    stepOutput.innerHTML = '<span style="font-size: 150%; color: Orchid">You\'re done! Great job!</span>' + '<br>' + ' Please <span style="color: Navy">rinse and dry</span> your hands!' + '<br><br><br>' + celeb;
}

function resetText() {
    stepOutput.innerHTML = 'Resetting...';
    setTimeout(introText(), 5000);
}

function tooManyHandsText() {
    stepOutput.innerHTML = 'More than two hands detected. Only one user allowed';
}

function triggerFireworks() {
    document.getElementById("btn").click();
}

// Counter for number of steps
var i = 3;

var congFlag = false;
let congTime = new easytimer.Timer();
let randNum = 0;
let tempStep = 0;
let tempStepFlag = false;

function congratzText() {
    if (!tempStepFlag) {
        tempStep = i;
        i = 0;
        tempStepFlag = true;
    }
    let congMsg = ['<span style="font-size: 150%; color: Orchid">Great job! You\'re doing great!</span>',
                   '<span style="font-size: 150%; color: Navy">Amazing work!</span>',
                   '<span style="font-size: 150%; color: IndianRed">Well done!</span>',
                   '<span style="font-size: 150%; color: MediumPurple">Way to go!</span>',
                   '<span style="font-size: 150%; color: Red">Almost there!</span>']
    congTime.start();
    stepOutput.innerHTML = congMsg[randNum] + '<br><br><br>' + smile + '<br>';
    if (congTime.getTimeValues().seconds > 3) {
        i = tempStep;
        tempStepFlag = false;
        congTime = new easytimer.Timer();
        congFlag = false;
        randNum = Math.floor(Math.random() * 5);
    }
}

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
        if (step3.start) {
            stepText(3);
        }

        if (step3.startTimeFlag) {
            step3.startTime.start();
            timeRemainText(3);
            progressbarText(3);
            if (step3.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step3.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step3State(frame)) {
            step3.start = true;
            step3.startTime.start({countdown: true, startValues: {seconds: 6}});
            step3.startTimeFlag = true;

        } else if (step3.start && step3far(frame)) {
            step3.startTime.pause();
            farHandsText(3);
        }
    }
    // Step 4
    if (step[i] === step4) {
        if (step4.finish) {
            i++;
        }
        // Text displays
        stepText(4);

        if (step4.startTimeFlag) {
            step4.startTime.start();
            timeRemainText(4);
            progressbarText(4);
            if (step4.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step4.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step4State(frame)) {
            step4.start = true;
            step4.startTime.start({countdown: true, startValues: {seconds: 6}});
            step4.startTimeFlag = true;
        } else if (step4.start && step4far(frame)) {
            step4.startTime.pause();
            farHandsText(4);
        }
    }
    // Step 5
    if (step[i] === step5) {
        if (step5.finish) {
            i++;
        }
        // Text displays
        stepText(5);

        if (step5.startTimeFlag) {
            step5.startTime.start();
            timeRemainText(5);
            progressbarText(5);
            if (step5.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step5.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step5State(frame)) {
            step5.start = true;
            step5.startTime.start({countdown: true, startValues: {seconds: 6}});
            step5.startTimeFlag = true;
        } else if (step5.start && step5far(frame)) {
            step5.startTime.pause();
            farHandsText(5);
        }
    }
    // Step 6
    if (step[i] === step6) {
        if (step6.finish) {
            i++;
        }
        // Text displays
        stepText(6);

        if (step6.startTimeFlag) {
            step6.startTime.start();
            timeRemainText(6);
            progressbarText(6);
            if (step6.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step6.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step6State(frame)) {
            step6.start = true;
            step6.startTime.start({countdown: true, startValues: {seconds: 6}});
            step6.startTimeFlag = true;
        } else if (step6.start && step6far(frame)) {
            step6.startTime.pause();
            farHandsText(6);
        }
    }
    // Step 7
    if (step[i] === step7) {
        if (step7.finish) {
            i++;
        }
        // Text displays
        stepText(7);

        if (step7.startTimeFlag) {
            step7.startTime.start();
            timeRemainText(7);
            progressbarText(7);
            if (step7.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step7.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step7State(frame)) {
            step7.start = true;
            step7.startTime.start({countdown: true, startValues: {seconds: 6}});
            step7.startTimeFlag = true;
        } else if (step7.start && step7far(frame)) {
            step7.startTime.pause();
            farHandsText(7);
        }
    }
    // Step 8
    if (step[i] === step8) {
        if (step8.finish) {
            i++;
        }
        // Text displays
        stepText(8);

        if (step8.startTimeFlag) {
            step8.startTime.start();
            timeRemainText(8);
            progressbarText(8);
            if (step8.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step8.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step8State(frame)) {
            step8.start = true;
            step8.startTime.start({countdown: true, startValues: {seconds: 6}});
            step8.startTimeFlag = true;
        } else if (step8.start && step8far(frame)) {
            step8.startTime.pause();
            farHandsText(8);
        }
    }
    // Step 9
    if (step[i] === step9) {
        if (step9.finish) {
            i++;
        }
        // Text displays
        stepText(9);
        if (step9.startTimeFlag) {
            step9.startTime.start();
            timeRemainText(9);
            progressbarText(9);
            if (step9.startTime.getTimeValues().seconds <= 0) {
                for (let i = 0; i < 3; i++) {
                    triggerFireworks();
                }
                step9.finish = true;
                congFlag = true;
            }
        }

        // Check if palms are close or not
        if (step9State(frame)) {
            step9.start = true;
            step9.startTime.start({countdown: true, startValues: {seconds: 6}});
            step9.startTimeFlag = true;
        } else if (step9.start && step9far(frame)) {
            step9.startTime.pause();
            farHandsText(9);
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

    if (congFlag) {
        congratzText();
    }
    
});
