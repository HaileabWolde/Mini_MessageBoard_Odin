const dialog = document.getElementById('myDialog');
const showButton = document.getElementById('showDialogButton');

// Show the modal dialog
showButton.addEventListener('click', () => {
    dialog.showModal()
    dialog.style.display = 'block'
});
