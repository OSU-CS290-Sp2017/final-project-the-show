/*
 * Header js control
 */
 console.log("index.js loaded");

var name;
var price;

$('.btn-outline-secondary').click(function(){
  name = $(this).attr("name");
  price = $(this).attr("price");
  console.log(name);
  console.log(price);
  alert('dish added to check out cart');
});

function insertinfon (){
  document.getElementById('product-name').innerHTML = name;
}
