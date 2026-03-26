function login(){
    let us=document.getElementById("username").value.trim() 
    let ps=document.getElementById("PASSWORD").value.trim() 
    if(us===''||ps===""){
        alert("please fill all feilds")
        return
    }
    usps={
        rohithkrishna:"5687",
        admin:"747",
        rk:"75854",
        bharath:"64646",
        rohith:"747848"
    }
    if(us in usps){
        if(usps[us]===ps){
            window.location.href="main.html"
        }
        else{
            document.getElementById("error").innerHTML="wrong password";
        }

    }
    else{
        document.getElementById("error").innerHTML="username not found";
    }
    
    




}