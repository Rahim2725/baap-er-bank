document.getElementById('submit-button').addEventListener('click', function(){
    const emailFiled = document.getElementById('email-filed');
    const userEmail = emailFiled.value ;
    const passwordFiled = document.getElementById('password-filed')
    const userPassword = passwordFiled.value ;

    if( userEmail == 'sontan.baap@gmail.com' && userPassword == 'secret'){
       window.location.href = 'banking.html'
    }  
 })