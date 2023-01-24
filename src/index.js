// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

let price = product.querySelector(".price span").innerText;


let quantity = product.querySelector(".quantity input").value;


let subTotalPrice = price * quantity;

let subTotal = product.querySelector(".subtotal");
subTotal.innerText = subTotalPrice;

//console.log(subTotal.innerText)
return subTotal.innerText



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
      // const singleProduct = document.querySelector('.product');
      // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let allProducts = document.querySelectorAll(".product");

  let totalProducts = document.querySelector("#total-value span");
  console.log(totalProducts)
  
  totalProducts.innerText = 0;
  
 
  // ITERATION 3
  //... your code goes here

  allProducts.forEach( (singleProduct) =>{
    let subTotal = updateSubtotal(singleProduct);
    console.log(subTotal);
    totalProducts.innerText = Number(totalProducts.innerText) + Number(subTotal);
    console.log(totalProducts.innerHTML);
    
  
  });


}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
target.parentNode.parentNode.remove()
  





}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("creating product")

  














}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  let removeButton = document.querySelectorAll(".btn-remove");
  removeButton.forEach( ( eachButton)=>{
    eachButton.addEventListener("click", removeProduct)
  });

  let createProductButton = document.querySelector("#create");
  createProductButton.addEventListener("click", createProduct);

});
