


const cartArray = [];

function addToCart(element){
  const productName = element.parentNode.parentNode.children[0].innerText;
  const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
  const productObject = {
    productName:productName,
    productPrice : 
      parseFloat(productPrice)
  }
  cartArray.push(productObject);
  displayCart(cartArray);
}

function displayCart(cartArray){

  const totalProducts =  document.getElementById("total-products");
  totalProducts.innerText = cartArray.length;

  const cartContainer = document.getElementById("products-cart");
    cartContainer.textContent = '';

    
  
  let totalPrice = 0;

  for (const element of cartArray) {

  const price = element.productPrice;
    totalPrice=totalPrice+price;

    let count = cartContainer.childElementCount;

    const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${count+1}</th>
        <td>${element.productName}</td>
        <td>${element.productPrice}</td>
        `;        cartContainer.appendChild(tr); 
  }
  
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
  `;
  cartContainer.appendChild(tr);
}