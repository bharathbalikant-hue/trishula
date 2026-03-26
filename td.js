let bt=document.getElementById("hi")
let ul=document.getElementById("tt")
console.log("connected")
bt.addEventListener("click",function(){
    
     let vl=document.getElementById("text").value.trim();
     console.log(vl)
     if(vl===""){
        alert("Please Enter something");
        document.getElementById("text").value="";
        return
     }
    let li= document.createElement("li")
    li.innerText=vl
    ul.appendChild(li)
    document.getElementById("text").value="";
    let wr=document.createElement("button")
    wr.innerText='❌';
    wr.onclick=function(){
      li.remove()

    }
   li.appendChild(wr)
   wr.classList.add("wrong")
   let tk=document.createElement("button")
   tk.innerHTML="✅"
   tk.classList.add("tick")
   tk.onclick=function(){
      li.classList.toggle("ticked")
   }
   li.appendChild(tk)

    




});