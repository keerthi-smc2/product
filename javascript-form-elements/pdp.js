
$('.small-img1').click(function() {
    $("#mainImg").attr("src", "https://img.joomcdn.net/6a33c118a3fedd71126580ce651b8ed62f5c8f37_original.jpeg");
});

$('.small-img2').click(function() {
    $("#mainImg").attr("src" ,"https://cdn.shopify.com/s/files/1/0397/5059/8813/products/2022-new-summer-baby-girls-dresses-casua_description-3_720x.jpg?v=1675753206");
});

$('.small-img3').click(function() {
    $("#mainImg").attr("src", "https://static.hopscotch.in/fstatic/product/202201/43893707-c96a-439c-9fd0-32da15d80a60_large.jpg?version=1641221846298&tr=w-480,c-at_max,n-normal");
});

$('.small-img4').click(function() {
    $("#mainImg").attr("src", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51UPSJltK3L.jpg");
});



$(document).ready(function () {
    $('#buy-btn').click(function () {
         alert("Your Order is Placed, Thank You for Ordering");
    });
});
