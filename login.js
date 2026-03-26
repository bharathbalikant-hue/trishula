function login(){
    if (username.value.trim()==='12345678'&&PASSWORD.value.trim()==='138'){
        window.location.href='main.html';
    }
    
    else if (username.value.trim()!=='12345678'){
        document.getElementById("error").innerHTML='wrong mobile number';
    }
    else if(PASSWORD.value.trim()!=='12345678'){
        document.getElementById("error").innerHTML='wrong password';
    }
    else if(username.value.trim() !=='12345678'&&PASSWORD.value.trim() !=='138'){
        document.getElementById('error').innerHTML='wrong mobile number and password';
    }

}