function loginForm() {
    var username = document.getElementsById('username');
    var password = document.getElementsById('password');
    if(username.value.trim()== ""){
        alert('please enter the name');
        username.style.border = 'px solid red';
    document.getElementsById('info').style.visibility = 'visible';
    return false;    
    }
    
else if(username.value.length<= 3){
    alert('minimum number of character should we 3 in user name');
    username.style.border ='2px solid red';
    return false;

}





};