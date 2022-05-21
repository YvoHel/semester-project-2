const container = document.querySelector(".shoe-container");
const title = document.querySelector("title")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const newUrl = `http://localhost:1337/products/${id}`;
const url = "http://localhost:1337";
let cart = document.querySelector(".add-cart");




async function getShoe() {


      const response = await fetch(newUrl);
      const result = await response.json();

      console.log(result)
      

      
  
      container.innerHTML += `
          <img src="http://localhost:1337${result.image.formats.small.url}" alt="${result.image.alternativeText}">
          <div class="info">
          <h1>${result.title}</h1>
          <p class="price">$ ${result.price}</p>
          <p class="description">${result.description}</p>
          
          </div>
          
          `
      
          title.innerHTML +=
          `Happy Feet | ${result.title}
          `
      };

      getShoe()


      async function product() {


        const response = await fetch(newUrl);
        const result = await response.json();
  
        console.log(result);

    

      };

      product();

    
cart.addEventListener("click", function() {
cartNumbers();
  
});

function onLoadcartNumbers(){
  let productNumbers = localStorage. getItem("cartNumbers");

  if (productNumbers){
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(){
  console.log();
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




  



        
       
               

        
     

        

        
        
       
        
    
   

    

    
    




      





