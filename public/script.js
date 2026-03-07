const dialog = document.getElementById('myDialog');
const showButton = document.getElementById('showDialogButton');
const showSideBar = document.getElementById('showSidebarButton');
const myform = document.getElementById('myform')
const Name = document.getElementById('Name')
const message = document.getElementById('Message')
const nameError = document.getElementById('name')
const messageError = document.getElementById('message')
const cancelButton = document.getElementById('cancelButton')
const eachUser = document.getElementsByClassName('user')
const mobileSideBar = document.querySelector('.mobileResponsive')
const exitSideBar = document.querySelector('.exitDirection')
const exitButton = document.getElementById('exitButton')
const regex = /^[a-zA-Z]+$/;
const messageRegex = /./s;

// Show the modal dialog
showButton.addEventListener('click', () => {
    dialog.showModal()
    dialog.style.display = 'block'
});

showSideBar.addEventListener('click', ()=>{
   
    mobileSideBar.style.display = 'block'
})
 exitButton.addEventListener('click', ()=>{
mobileSideBar.style.display = 'none'
 })

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();           // stops form submission
    dialog.style.display = 'none'
    dialog.close()
});

// Validate The Form

function validateForm(event){
     event.preventDefault();
    if(!regex.test(Name.value) || !(Name.value)){
       nameError.style.display = "block"
       nameError.textContent = "Please type alphabbetic letters only"
        nameError.style.color = '#EA0063'
        nameError.style.fontStyle = "italic"
     
    }
    else if(!message.value.trim() || !messageRegex.test(message.value)){
            nameError.style.display = "none";
            messageError.style.display = "block"
            messageError.textContent = "Please type alphabbetic letters only"
            messageError.style.color = '#EA0063'
            messageError.style.fontStyle = "italic"
    }
    else {
        messageError.style.display = "none"
          alert("Your Message Have been added succesfully")
        
      
        dialog.style.display = 'none'
         dialog.close()
         // Option A: Let the form submit normally (recommended)
        myform.removeEventListener('submit', validateForm); // optional safety
        myform.submit();   // ← this triggers the real POST

    }
}


myform.addEventListener('submit', validateForm)

//Close the modal dialog

