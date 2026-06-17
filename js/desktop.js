const button_terminal = document.getElementById('change_to_window');
const button_window = document.getElementById('change_to_terminal');
const terminal_screen = document.getElementById('terminal')
const window_screen = document.getElementById('window_gui')

function ChangeToWindow(e) {
    e.preventDefault();
    // Remove classes
    button_window.classList.remove("hide_current");
    window_screen.classList.remove("hide_current");
    terminal_screen.classList.remove("show_hidden");
    button_terminal.classList.remove("show_hidden");
    //Add classes
    terminal_screen.classList.add("hide_current");
    window_screen.classList.add("show_hidden");
    button_terminal.classList.add("hide_current");
    button_window.classList.add("show_hidden");
}   
function ChangeToTerminal(e) {
    e.preventDefault();
    // remove classses
    button_terminal.classList.remove("hide_current");
    terminal_screen.classList.remove("hide_current");
    window_screen.classList.remove("show_hidden");
    button_window.classList.remove("show_hidden")
    // Add classes
    window_screen.classList.add("hide_current");
    terminal_screen.classList.add("show_hidden");
    button_window.classList.add("hide_current");
    button_terminal.classList.add("show_hidden");
}
button_terminal.addEventListener('click', ChangeToWindow, false);
button_window.addEventListener('click', ChangeToTerminal, false);