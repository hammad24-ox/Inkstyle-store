// Cart System

let cart = [];

let buttons = document.querySelectorAll(".add-cart");

let cartItems = document.getElementById("cartItems");

let cartCount = document.getElementById("cart-count");

let totalItems = document.getElementById("totalItems");

let cartTotal = document.getElementById("cartTotal");





// Add To Cart

buttons.forEach(button => {


button.addEventListener("click",()=>{


let name = button.getAttribute("data-name");

let price = Number(button.getAttribute("data-price"));



cart.push({

name:name,

price:price

});



updateCart();


});


});







// Update Cart


function updateCart(){


cartItems.innerHTML="";


let total = 0;



cart.forEach((item,index)=>{


total += item.price;



let li = document.createElement("li");


li.className="list-group-item";



li.innerHTML = `

${item.name}

<br>

Rs. ${item.price}


<button class="btn btn-sm btn-danger float-end"

onclick="removeItem(${index})">

Remove

</button>

`;



cartItems.appendChild(li);



});




cartCount.innerText = cart.length;

totalItems.innerText = cart.length;

cartTotal.innerText = total;


}







// Remove Item


function removeItem(index){


cart.splice(index,1);


updateCart();


}

// Wishlist System


let wishlistButtons = document.querySelectorAll(".wishlist");


wishlistButtons.forEach(button=>{


button.addEventListener("click",()=>{


button.innerHTML="❤️ Added";


button.classList.remove("btn-outline-danger");


button.classList.add("btn-danger");



});


});







// Search System


let searchInput = document.getElementById("searchInput");


let products = document.querySelectorAll(".product");



if(searchInput){


searchInput.addEventListener("keyup",()=>{


let value = searchInput.value.toLowerCase();



products.forEach(product=>{


let text = product.innerText.toLowerCase();



if(text.includes(value)){


product.style.display="block";


}

else{


product.style.display="none";


}



});



});


}







// Category Filter


let categoryButtons = document.querySelectorAll(".category-btn");



categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


let category = button.getAttribute("data-category");



products.forEach(product=>{


if(product.getAttribute("data-category") === category){


product.style.display="block";


}

else{


product.style.display="none";


}



});



});



});


// Open Checkout


function openCheckout(){


let checkout = document.getElementById("checkout");



if(cart.length === 0){


alert("Your cart is empty");


return;


}



checkout.classList.remove("d-none");


checkout.scrollIntoView({

behavior:"smooth"

});


}







// WhatsApp Order


function whatsappOrder(){



let name = document.getElementById("customerName").value;


let phone = document.getElementById("customerPhone").value;


let city = document.getElementById("customerCity").value;


let address = document.getElementById("customerAddress").value;



let order = "";



cart.forEach(item=>{


order += item.name + 
" - Rs." + item.price + "\n";


});




let message = `

Hello InkStyle Store,

New Order:

${order}

Customer:
${name}

Phone:
${phone}

City:
${city}

Address:
${address}

`;




let whatsappNumber = "923001234567";



let url = 
"https://wa.me/" + whatsappNumber +
"?text=" + encodeURIComponent(message);



window.open(url,"_blank");


}
