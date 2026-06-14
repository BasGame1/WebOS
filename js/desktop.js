const button_terminal = document.getElementById('change_to_window');
const button_window = document.getElementById('change_to_terminal');
const terminal_screen = document.getElementById('terminal')
const window_screen = document.getElementById('window')

function ChangeToWindow(e) {
    e.preventDefault();
    terminal_screen.classList.add("hide_current");
    window_screen.classList.add("show_hidden");
}
function ChangeToTerminal(e) {
    e.preventDefault();
    window_screen.classList.add("hide_current");
    terminal_screen.classList.add("show_hidden");
}
button_terminal.addEventListener('click', ChangeToWindow, false);
button_window.addEventListener('click', ChangeToTerminal, false);