const buyButtons = document.getElementsByClassName("buy");
const buyButtons1 = document.getElementsByClassName("buy1");
const list1 = document.getElementById("list");
const closeButton = document.getElementById("close");
const result = document.getElementById("result-item");
let cartTotal = [];

// buy item 1
for (var i = 0; i < buyButtons.length; i++) {
  const button = buyButtons[i];
  button.addEventListener("click", addToCart);
}

// buy item 2
for (var i = 0; i < buyButtons1.length; i++) {
  const button = buyButtons1[i];
  button.addEventListener("click", addToCart1);
}

// close button
closeButton.addEventListener("click", resetTotal);

// function to remove list or li elements
function resetTotal() {
  cartTotal = []; // Reset the cart items array
  while (list1.firstChild) {
    list1.removeChild(list1.firstChild);
  }
  result.innerText = "0"; // Reset the total price to 0
}

// function to add to cart item1
function addToCart(event) {
  const li = document.createElement("li");
  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = `${product.name} harga:${product.price}`;
  list1.appendChild(li);

  showPrice();
}

// function to add to cart item2
function addToCart1(event) {
  const li = document.createElement("li");
  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = `${product.name} harga:${product.price}`;
  list1.appendChild(li);

  showPrice();
}

// function to calculate and display total price
function showPrice() {
  let totalItemsPrice = 0;

  for (let i = 0; i < cartTotal.length; i++) {
    totalItemsPrice += parseInt(cartTotal[i].price);
  }
  result.innerText = totalItemsPrice;
}
