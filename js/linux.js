window.onload = function () {
var emulator = new V86({
    screen_container: document.getElementById("window_gui"),
    wasm_path: "../public/v86/v86.wasm",
    cdrom: {
        url: "../public/linux/linux.iso",
    },
    autostart: true,
});
}