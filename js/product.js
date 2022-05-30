import {getShoe} from "./ui/renderProduct.js"
import {onLoadcartNumbers} from "./components/cartNumber.js"

let cart = document.querySelector(".add-cart");


getShoe()

cart.addEventListener("click", function() {
cartNumbers();
  
});


function cartNumbers(){
  let productNumbers = localStorage. getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers){
    localStorage.setItem ( "cartNumbers", productNumbers+ 1);
    document.querySelector(".cart span").textContent = productNumbers+ 1;
  } else{
    localStorage.setItem ( "cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

}

onLoadcartNumbers()




  



        
       
               

        
     

        

        
        
       
        
    
   

    

    
    




      





