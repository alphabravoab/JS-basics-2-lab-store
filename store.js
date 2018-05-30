// TODO:
// var products = []
let products = [
 { referenceNumber: 1, name: "Super Lite Mat", price: 10 },
 { referenceNumber: 2, name: "Power Mat", price: 20 },
 { referenceNumber: 3, name: "Block", price: 30 },
 { referenceNumber: 4, name: "Meditation cushion", price: 30 },
 { referenceNumber: 5, name: "The best T-shirt", price: 200 },
 { referenceNumber: 6, name: "The cutest yoga pants", price: 300 },
 { referenceNumber: 7, name: "Bring Yoga To Life", price: 30 },
 { referenceNumber: 8, name: "Light On Yoga", price: 10 }
]

// Declare `shoppingCart`, something where you will be storing all products that the user buys.
// Declare `products`, the different that you will be selling under each of the departments.
let shoppingCart=[];
let totalprice=0;
let shopFromStore = function () {
  let refNr = parseInt(askUserForReferenceNumber());
  // Add the product with the matching referenceNumber to the shoppingCart
  function findProduct(x){
    console.log('function running');
    return x.referenceNumber === refNr;
  };
  let gimmi = products.find(findProduct);
  console.log(refNr);
  console.log(gimmi);
  shoppingCart.push(gimmi);
  console.log(shoppingCart);
  displayProductsFromShoppingCart();
  moreorstop();
  // calculate the total price of your cart, and use it:


  let Checkouts = shoppingCart.map(function(item) {
    return item.price;
});
  let totalPrice = Checkouts.reduce(function(a,b){
    return a+b;
  });
  console.log(totalprice);
  displayTotalPrice(totalPrice);
};

// Ask the user if they want to continue shopping,
// if yes, call this function again
// if no, print the goodbye message
let moreorstop = function(){
let x = window.prompt( 'Do you want more junk?' )
  if (x=='no'){
    console.log('goodbye');
  }else {
    shopFromStore();
  }
}




var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents

  // use the printProductsOnScreen function for inspiration
};

let askUserForReferenceNumber = function() {
  return window.prompt('what product do you want')

};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
