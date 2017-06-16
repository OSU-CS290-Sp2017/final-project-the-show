/*
 * Header js control
 */
 console.log("index.js loaded");
 var allmenu = [];
 var name;
 var price;
 function generateNewmenuElem(Numbers, names ,Prices, PicURL ) {

    var menuTemplate = Handlebars.templates.adminCard;
    var menuData = {
      id: Numbers,
      name: names,
      price: Prices,
      url: PicURL
    };
    return menuTemplate(menuData);
  }

  function insertNewmenu(){
    var numberinput = document.getElementById('number-input').value;
    var nameinput = document.getElementById('name-input').value;
    var priceinput = document.getElementById('price-input').value;
    var picinput = document.getElementById('picurl-input').value;

    var newmenu = generateNewmenuElem(numberinput, nameinput, priceinput, picinput);
    var adminContainer = document.getElementById('admin-card');
    adminContainer.insertAdjacentHTML('afterbegin',newmenu);
    clearTextInputValues()
    var menuContainer = document.getElementById('menu-card');
    menuContainer.insertAdjacentHTML('afterbegin',newmenu);

  }

  function clearTextInputValues() {
    document.getElementById('number-input').value = "";
    document.getElementById('name-nput').value = "";
    document.getElementById('price-input').value = "";
    document.getElementById('picurl-input').value = "";

  }


  function deleteRow(r) {
    var row = r.parentNode;
    document.getElementById('admin-card').deleteRow(row);
  }
/*
 window.addEventListener('DOMContentLoaded', function () {
   var addbutton = document.getElementById('add-button');
   addbutton.addEventListener('click',insertNewmenu);
*/

function insertNewDishes () {
  var numberInput = document.getElementById('number-input').value;
  var nameInput = document.getElementById('name-input').value;
  var priceInput = document.getElementById('price-input').value;
  var picInput = document.getElementById('picurl-input').value;

  var obj = {
    id: numberInput,
    name: nameInput,
    price: priceInput,
    url: picInput
  };

  tempStorage = JSON.stringify({dishes:[obj]});
  Handlebars.registerHelper('json', function (context) {
    return tempStorage;
  });
  console.log(JSON.stringify({dishes:[obj]}));
}

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

var addbutton = document.getElementById('add-button');
  addbutton.addEventListener('click',insertNewmenu);

var removebutton = document.getElementById('remove-button');
  removebutton.addEventListener('click',deleteRow);
