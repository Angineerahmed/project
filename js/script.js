var list = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var addtocart = document.querySelector("#addtocart")
var totalPrice =  0 ;

list.forEach(function (item){
     item.onclick = function (){
        
        totalPrice +=  parseInt(item.getAttribute("price"))  
        content.innerHTML += item.textContent + " " ;
        
        if (content.innerHTML !=","){
            addtocart.style.display = "block";
             
         }

     }
     content.innerHTML = totalPrice;
})