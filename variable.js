const products = ["products A", "products B"];
let result = "";
for (let i = 0; i < products.length; i++) {
    result += "<div>" + products[i] + "</div>";
}
console.log(products);
document.querySelector("#app").innerHTML = result;