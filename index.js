const m1={
    src : "../images/men/shoe-1.jpg",
    name : "Campus Men's VIRTAL Running",
    price : "1000"
}
const m2 = {
    src : "../images/men/shoe-2.jpg",
    name : "ASIAN Men's Thar-01 Sports shoe",
    price : "1000"
}
const m3 = {
    src : "../images/men/shoe-3.jpg",
    name : "Red Tape Men Black Running Shoe",
    price : "1200"
}
const m4 = {
    src : "../images/men/shoe-4.jpg",
    name : "Red Tape Men Grey Running Shoe",
    price : "1300"
}
const m5 = {
    src : "../images/men/sneakers-1.jpg",
    name : "Red Tape Sneaker Casual Shoes",
    price : "1000"
}
const m6 = {
    src : "../images/men/sneakers-2.jpg",
    name : "Red Tape Casual Sneaker Shoes",
    price : "1500"
}
const m7 = {
    src : "../images/men/sneakers-3.jpg",
    name : "Puma Unisex-Adult Wired Rapid",
    price : "1200"
}
const m8= {
    src : "../images/men/sneakers-4.jpg",
    name : "ASIAN Men's Tarzan-11 White",
    price : "1300"
}

let productsInList = [];

const cardContainer = document.getElementById("products-cart-id");




function addToCart(product){
  
    if(product){
        productsInList.push(product);
        console.log(productsInList);
        localStorage.setItem("productsInLS", JSON.stringify(productsInList));
    }
    else{
        alert("No Such Product")
    }
}

function loadCart(){
    cardContainer.innerHTML = "";

    const pInLocalStorage = localStorage.getItem("productsInLS");

    productsInList = JSON.parse(pInLocalStorage);

    for(let i=0; i<productsInList.length ; i++){
        const product = productsInList[i];
        cardContainer.innerHTML += `<div class="card rounded-2 col-md-3 m-2 p-2"> 
                                            <div class="d-flex flex-sm-row flex-md-column align-items-sm-center ">
                                                <img src="${product.src}" class="d-block" height="250" alt="Shoe-1"> 
                                                <div class="mx-sm-3">
                                                <p class="text-start fw-bold fs-6">${product.name}</p>
                                                <p class="text-start fs-5">${product.price}/-</p>
                                                <button type="button" class="btn btn-danger py-1 px-2 col-12" onclick="removeFromCart(${i})">Remove</button>
                                                </div>
                                            </div>
                                        </div>`;
    }

}


function removeFromCart(productPos){
    console.log(productPos);
        productsInList.splice(productPos, 1);
        console.log(productsInList);
        localStorage.setItem("productsInLS", JSON.stringify(productsInList));
        loadCart();
}

function totalPrice(){
    let totalPriceCount = 0;
    for(let i=0; i<productsInList.length ; i++){
        const product = productsInList[i];
        totalPriceCount += parseInt( product.price);
    }
    const priceDisplay = document.getElementById('total-in-cart');
    priceDisplay.innerText = totalPriceCount;
}