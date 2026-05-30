const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');
const sound = document.getElementById('btn-click-sound');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (button.classList.contains('clear-btn')) {
            display.value = '';
        } else if (button.classList.contains('delete-btn')) {
            display.value = display.value.slice(0, -1);
        } else if (button.classList.contains('equal')) {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
  });
});