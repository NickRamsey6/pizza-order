//Business Logic
var toppings = [];

function Order (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Order.prototype.newOrder = function(toppings, size) {
  return this.toppings + this.size
}

// var toppingsPrice = function toppingsPrice() {
//   var toppings = [];
//   if(toppings.length === 1) {
//     toppingsPrice = 1
//   }
//   else if (toppings.length === 2) {
//     toppingsPrice = 2
//   }
//   else if (toppings.length ===3) {
//     toppingsPrice = 3
//   }
//   else {
//     toppingsPrice = 4
//   }
// }
//
// var sizePrice = function sizePrice() {
//   if(pizzaSizeOrder === "Small") {
//     sizePrice = 1
//   }
//   else if (pizzaSizeOrder === "Medium") {
//     sizePrice = 2
//   }
//   else {
//     sizePrice = 3
//   }
// }
//
// var totalPrice = function totalPrice(toppingsPrice, sizePrice) {
//   return toppingsPrice * sizePrice;
// };



//User Interface Logi
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    // $("#your-order").show();
    var toppings = [];
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var pizzaToppingOrder = $(this).val();
      toppings.push(pizzaToppingOrder);
      $("#your-toppings").append(pizzaToppingOrder + "<br>");
      $("#your-toppings").show();
    });
    var pizzaSizeOrder = $("select#size").val();
    $("#your-size").append(pizzaSizeOrder + "<br>");
    $("#your-size").show();
    // var totalPrice = function totalPrice(toppingsPrice, sizePrice) {
    //   return toppingsPrice * sizePrice;
    //   $("#your-price").append(totalPrice + "<br>");
    //   $("#your-price").show();
    // };
    var price = 10;
    if (pizzaSizeOrder === "Medium") {
      price +=5;
    } else if (pizzaSizeOrder === "Large") {
      price +=10;
    }
    $("#your-price").append(price + "<br>");
    $("#your-price").show();
  });
    // $('#transportation_survey').hide();
});
