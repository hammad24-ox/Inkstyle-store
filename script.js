let cart = [];

let wishlist = [];


let buttons = document.querySelectorAll(".add-cart");

let cartItems = document.getElementById("cart-items");

let cartCount = document.getElementById("cart-count");



// Add To Cart

buttons.forEach(button => {

button.addEventListener("click",()=>{


let product = button.getAttribute("data-name");


cart.push(product);


updateCart();


});


});





// Update Cart

function updateCart(){


cartItems.innerHTML="";


cart.forEach((item,index)=>{


let li=document.createElement("li");


li.innerText=item+" ";



let remove=document.createElement("button");


remove.innerText="Remove";


remove.className="btn btn-sm btn-dark";


remove.onclick=()=>{


cart.splice(index,1);


updateCart();


};



li.appendChild(remove);


cartItems.appendChild(li);



});



cartCount.innerText=cart.length;



}






// Wishlist


let wishButtons=document.querySelectorAll(".wishlist");



wishButtons.forEach((button)=>{


button.addEventListener("click",()=>{


let name=button.parentElement.querySelector("h3").innerText;


wishlist.push(name);


button.innerText="❤️ Added";


alert(name+" added to Wishlist");


});


});







// Search


let search=document.getElementById("search");


let products=document.querySelectorAll(".product");



search.addEventListener("keyup",()=>{


let value=search.value.toLowerCase();



products.forEach(product=>{


let text=product.innerText.toLowerCase();



if(text.includes(value)){


product.style.display="block";


}

else{


product.style.display="none";


}


});


});
