const productlist = [
  {
    id: 1,
    name: "Product A",
    img: "https://picsum.photos/300/300",
    time: 30,
    type: "snack",
  },
  {
    id: 2,
    name: "Product B",
    img: "https://picsum.photos/300/300",
    time: 30,
    type: "snack",
  },
  {
    id: 3,
    name: "Product C",
    img: "https://picsum.photos/300/300",
    time: 20,
    type: "snack",
  },
]

function showProdcuct(products){
  if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div>
        <div class="product-img">
            <a href="">
                <img src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content">
            <h3><a href="">${product.name}</a></h3>
            <div class="flex">
                <span>${product.time} times</span>
                <span>${product.type}</span>
            </div>
        </div>
    </div>
        `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProdcuct(productlist);