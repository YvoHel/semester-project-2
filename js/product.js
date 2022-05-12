const container = document.querySelector(".shoe-container");
const title = document.querySelector("title")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const newUrl = `http://localhost:1337/products/${id}`;
const url = "http://localhost:1337";



        async function products() {
                const response = await fetch(newUrl);
                const json = await response.json();
                const result = json;
        
                console.log(result);
                createHtml(result);
        };
        
        products();

        function createHtml(result){
                console.log(result.id);

                container.innerHTML += `
                 <img src="${url+result.image.formats.small.url}" alt="${result.image.alternativeText}">
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


        
        const carts = document.querySelectorAll('.add-cart');

        carts.forEach((button) =>{
                button.addEventListener("click",handleClick)
        });
        
     

        

        
        
       
        
    
   

    

    
    




      





