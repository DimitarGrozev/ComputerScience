let mode = 'navbar navbar-expand-lg navbar-light bg-light';
let toggleStyle = 'color:gray';
let toggleText = 'Toggle dark mode';

function switchMode() {
    let navBar = document.getElementById('navigationBar');
    navBar.setAttribute('class', mode);

    let toggleLabel = document.getElementById('toggleLabel');
    toggleLabel.setAttribute('style', toggleStyle);
    toggleLabel.innerText = toggleText;

    if (mode === 'navbar navbar-expand-lg navbar-light bg-light') {
        mode = 'navbar navbar-expand-lg navbar-dark bg-dark';
        toggleStyle = 'color:white';
        toggleText = 'Toggle light mode';
    } else {
        mode = 'navbar navbar-expand-lg navbar-light bg-light';
        toggleStyle = 'color:gray';
        toggleText = 'Toggle dark mode';
    }
}

document.getElementById('customSwitch1').addEventListener('click', switchMode);