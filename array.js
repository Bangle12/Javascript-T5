var man = [
    {
        id:1,
        name: "Quần Shorts Nam chạy bộ ",
        code: "TC102",
        price: "250.000",
        image: "https://247store.vn/uploads/products/20201117/z2182205874845a916b991789c39e5b36669eb27e90645.jpg"
    },
    {
        id:2,
        name: "QUẦN SHORTS 1",
        code: "TC103",
        price: "350.000",
        image: "https://th.bing.com/th/id/OIP.-yZvyw60cuw4lbIb7GwOgQHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.1"
    },
    {
        id:3,
        name: "QUẦN SHORTS",
        code: "TC104",
        price: "150.000",
        image: "https://product.hstatic.net/1000271846/product/pants-beige-01_fcff1444268b47ffacc171b2748dbe5a_master.jpg"
    },
];
var woment = [
    {
        id:1,
        name: "Váy Ngắn Nữ",
        code: "EC201",
        price: "450.000",
        image: "https://www.bing.com/th?id=OIP.4GuRXfjEtdnu5SERkzTJPQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
    },
    {
        id:2,
        name: "Chân váy nữ ",
        code: "EC202",
        price: "190.000",
        image: "https://th.bing.com/th/id/OIP.aRlWnAfNF2Qlac7CiCDm9gHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    },
    {
        id:3,
        name: "Váy Tay Lớn",
        code: "EC203",
        price: "400.000",
        image: "https://th.bing.com/th/id/OIP.9Wxl-Erxe1Kepg2m2JaMfQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    },
    
];
function listProducts(){
    for(let i = 0; i <= man.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+man[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    
    for(let i = 0; i <= woment.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+woment[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}