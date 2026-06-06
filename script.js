const products = {

Apple: [
{
name: "iPhone 16 Pro",
price: "$1199",
features: [
"6.3-inch OLED Display",
"A18 Pro Chip",
"48MP Camera",
"256GB Storage"
]
},
{
name: "MacBook Pro M4",
price: "$1999",
features: [
"M4 Processor",
"16GB RAM",
"512GB SSD",
"Liquid Retina Display"
]
}
],

Samsung: [
{
name: "Galaxy S26 Ultra",
price: "$1299",
features: [
"200MP Camera",
"Snapdragon Processor",
"12GB RAM",
"512GB Storage"
]
},
{
name: "Galaxy Book 5",
price: "$1499",
features: [
"Intel Ultra Processor",
"16GB RAM",
"1TB SSD"
]
}
],

Sony: [
{
name: "PlayStation 5",
price: "$499",
features: [
"4K Gaming",
"1TB SSD",
"Ray Tracing",
"DualSense Controller"
]
}
],

Dell: [
{
name: "Dell XPS 15",
price: "$1799",
features: [
"Intel i9",
"32GB RAM",
"1TB SSD",
"4K Display"
]
}
],

HP: [
{
name: "HP Spectre x360",
price: "$1599",
features: [
"Touch Screen",
"Intel Ultra Processor",
"16GB RAM"
]
}
],

Lenovo: [
{
name: "ThinkPad X1 Carbon",
price: "$1699",
features: [
"Business Laptop",
"Intel Ultra",
"16GB RAM",
"1TB SSD"
]
}
]

};

function showProducts(brand){

document.getElementById("brandPage").classList.add("hidden");

document.getElementById("productPage")
.classList.remove("hidden");

document.getElementById("brandTitle").innerHTML =
brand + " Products";

let html = "";

products[brand].forEach(product => {

html += `
<div class="product-card">

<h3>${product.name}</h3>

<div class="price">
${product.price}
</div>

<h4>Features</h4>

<ul>
${product.features
.map(feature => `<li>${feature}</li>`)
.join("")}
</ul>

<button
class="order-btn"
onclick="placeOrder('${product.name}')">
Place Order
</button>

</div>
`;

});

document.getElementById("productContainer")
.innerHTML = html;

}

function goBack(){

document.getElementById("productPage")
.classList.add("hidden");

document.getElementById("brandPage")
.classList.remove("hidden");

}

function placeOrder(product){

alert(
"YOUR ORDER HAS BEEN SUCCESSFULLY PLACED\n\n" +
"Product: " + product
);

}