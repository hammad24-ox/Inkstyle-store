console.log("InkStyle Store Loaded Successfully!");
let cart = [];

let buttons = document.querySelectorAll(".add-cart");

let cartItems = document.getElementById("cart-items");
let cartCount = document.getElementById("cart-count");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    let product = button.getAttribute("data-name");

    cart.push(product);

    updateCart();

  });

});


function updateCart(){

  cartItems.innerHTML = "";

  cart.forEach(item => {

    let li = document.createElement("li");

    li.innerText = item;

    cartItems.appendChild(li);

  });


  cartCount.innerText = cart.length;

}
