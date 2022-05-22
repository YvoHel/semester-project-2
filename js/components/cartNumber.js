export function onLoadcartNumbers(){
    let productNumbers = localStorage. getItem("cartNumbers");
  
    if (productNumbers){
      document.querySelector(".cart span").textContent = productNumbers;
    }
  }