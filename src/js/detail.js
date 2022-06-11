const productList = [
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
        time: 60,
        type: "snack",
    },
    {
        id: 3,
        name: "Product C",
        img: "https://picsum.photos/300/300",
        time: 10,
        type: "fish",
    },
];
// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<h2>${product.name}</h2>`;
    return result;
}

document.getElementById("detail").innerHTML = showProduct(productList);