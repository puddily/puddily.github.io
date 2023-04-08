passwordField = document.querySelector('#password')
passwordConfirmField = document.querySelector('#password-confirm')
passwordFieldValue = ''
passwordConfirmFieldValue = ''


passwordField.addEventListener('change', (e)=>{
    passwordFieldValue = e.target.value
})
passwordConfirmField.addEventListener('change', (e)=>{
    passwordConfirmFieldValue = e.target.value
    if(passwordConfirmFieldValue!==passwordFieldValue){
        e.target.setCustomValidity("Fields do not match")
    }
    else{
        e.target.setCustomValidity("")
    }
})