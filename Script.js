// Get screen and sound
let scrn = document.getElementById('Screen');
const clickSound = document.getElementById('clickSound');

// Play sound on every button press
function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// Append value to screen
function input(x) {
    playSound();
    scrn.value += x;
}

// Clear screen
function allclear() {
    playSound();
    scrn.value = '';
}

// Delete last character
function del() {
    playSound();
    scrn.value = scrn.value.slice(0, -1);
}

// Calculate result
function calc() {
    playSound();
    try {
        scrn.value = eval(scrn.value);
    } catch {
        scrn.value = 'Error';
    }
}
