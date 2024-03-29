const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const loginForm = document.getElementById('login-form')
let modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById("decline-btn")
const btnContainer = document.getElementById('modal-choice-btns')

setTimeout(function(){
    modal.style.display = 'inline'
}, 2000)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseover',function(){
    btnContainer.classList.toggle('reverse')

})

loginForm.addEventListener('submit',function(e){
    e.preventDefault()  
    
    const consentFormData = new FormData(loginForm)
    const name = consentFormData.get("fullName")

    modalText.innerHTML = 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        document.getElementById('uploadText').innerText = `Making the sale...`
    },1500)

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = 
        `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`  
        modalCloseBtn.disabled = false    

    },3000)

})