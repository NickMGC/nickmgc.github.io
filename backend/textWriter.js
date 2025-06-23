var typedWord = '';

function onKeyPress(event) {
    typedWord = typedWord + event.key;

    if (typedWord === 'lime') {
        window.location.href = 'lime.html';
    }
}

document.addEventListener('keypress', onKeyPress)