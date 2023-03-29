const form = document.querySelector('#form')

const inputs = document.querySelectorAll('.input')

const email = document.querySelector('#email')

const nameInput = document.querySelector('#name')

const surname = document.querySelector('#surname')

const password = document.querySelector('#password')

const rePassword = document.querySelector('#repassword')

const birthdate = document.querySelector('#birthdate')

const submit = document.querySelector('#submit')




function handleFormSubmit(event) {
    let errCount = 0
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++

        if(input.value ==='')
        {
            input.classList.add('error')
            event.preventDefault()
        }
    })

   
    let emptyFields = Array.from(inputs).filter(input => input.value === '')
    if(emptyFields.length !== 0)
    event.preventDefault()

    else if(errCount === 0 )
    console.log('Отправка!')
    else
    event.preventDefault()
    console.log('emptyFields',emptyFields)
  }
  
  
  form.addEventListener('submit', handleFormSubmit)



nameInput.addEventListener("input", function (event){
    const alert = document.querySelector('.name-alert')
    let errCount = 0
    let emptyFieldsCount = 0
    if(!isNameValid(nameInput.value))
    {
        nameInput.classList.add('error')
        alert.style.display = 'block'
    }
    else
    {
        nameInput.classList.remove('error')
        alert.style.display = 'none'
    }
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++
        if(input.value ==='')
        emptyFieldsCount++
    })
    if(errCount === 0 && emptyFieldsCount === 0)
    {
        submit.classList.remove('btn-secondary')
        submit.classList.add('btn-success')
        
        
    }
    else 
    {
        submit.classList.remove('btn-success')
        submit.classList.add('btn-secondary')
    }
})

surname.addEventListener("input", function (event){
    let errCount = 0
    let emptyFieldsCount = 0
    const alert = document.querySelector('.surname-alert')
    if(!isNameValid(surname.value))
    {
        surname.classList.add('error')
        alert.style.display = 'block'
    }
    else
    {
        surname.classList.remove('error')
        alert.style.display = 'none'
    }
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++
        if(input.value ==='')
        emptyFieldsCount++
    })
    if(errCount === 0 && emptyFieldsCount === 0)
    {
        submit.classList.remove('btn-secondary')
        submit.classList.add('btn-success')
        
        
    }
    else 
    {
        submit.classList.remove('btn-success')
        submit.classList.add('btn-secondary')
    }
})

email.addEventListener("input", function (event) {
    let errCount = 0
    let emptyFieldsCount = 0
    const alert = document.querySelector('.email-alert')
    if(!isEmailValid(email.value))
    {
        email.classList.add('error')
        
        alert.style.display ='block'
    }
    else
    {
        email.classList.remove('error')
        alert.style.display = 'none'
    }
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++
        if(input.value ==='')
        emptyFieldsCount++
    })
    if(errCount === 0 && emptyFieldsCount === 0)
    {
        submit.classList.remove('btn-secondary')
        submit.classList.add('btn-success')
        
        
    }
    else 
    {
        submit.classList.remove('btn-success')
        submit.classList.add('btn-secondary')
    }
});

password.addEventListener("input", function(event){
    let errCount = 0
    let emptyFieldsCount = 0
    const alert = document.querySelector('.password-alert')

    if(!isPasswordValid(password.value))
    {
        password.classList.add('error')
        alert.style.display = 'block'
    }
    else
    {
        password.classList.remove('error')
        alert.style.display = 'none'
    }
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++
        if(input.value ==='')
        emptyFieldsCount++
    })
    if(errCount === 0 && emptyFieldsCount === 0)
    {
        submit.classList.remove('btn-secondary')
        submit.classList.add('btn-success')
        
        
    }
    else 
    {
        submit.classList.remove('btn-success')
        submit.classList.add('btn-secondary')
    }
})

rePassword.addEventListener("input", function(event){
    let errCount = 0
    let emptyFieldsCount = 0
    const alert = document.querySelector('.repass-alert')
    if(!checkRePass(rePassword.value, password.value))
    {
        rePassword.classList.add("error")
        alert.style.display = 'block'
    }
    else
    {
        rePassword.classList.remove('error')
        alert.style.display = 'none'
    }
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++
        if(input.value ==='')
        emptyFieldsCount++
    })
    if(errCount === 0 && emptyFieldsCount === 0)
    {
        submit.classList.remove('btn-secondary')
        submit.classList.add('btn-success')
        
        
    }
    else 
    {
        submit.classList.remove('btn-success')
        submit.classList.add('btn-secondary')
    }
})

birthdate.addEventListener('input', function(event){
    let errCount = 0
    let emptyFieldsCount = 0
    const alert =  document.querySelector('.date-alert')
    if(!isUpperEighteen(birthdate.value))
    {
        alert.style.display = 'block'
        birthdate.classList.add('error')
    }
    else
    {
        alert.style.display = 'none'
        birthdate.classList.remove('error')
    }
    inputs.forEach((input)=>{
        if(input.classList.contains('error'))
        errCount++
        if(input.value ==='')
        emptyFieldsCount++
    })
    if(errCount === 0 && emptyFieldsCount === 0)
    {
        submit.classList.remove('btn-secondary')
        submit.classList.add('btn-success')
        
        
    }
    else 
    {
        submit.classList.remove('btn-success')
        submit.classList.add('btn-secondary')
    }
})


function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
  
    return emailRegexp.test(email)
}

function isNameValid(name)
{
    const regname = new RegExp(
        /^[a-zA-Zа-яА-Я ]+$/ 
    )
    return regname.test(name)
}


//валидация пароля 
function isPasswordValid(password)
{
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Zа-яА-Я0-9!@#$%^&*]{8,16}$/;
    return re.test(password);
}

//проверка совпадения пароля
function checkRePass(pass, repass)
{
    return repass === pass
}

//проверка старше ли 18 лет
function isUpperEighteen(date)
{
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age>=18? true:false;
}


