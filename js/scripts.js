//Business Logic
var toppings = [];

function Order (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

var toppingsPrice = function toppingsPrice() {
  var toppings = [];
  if(toppings.lenght === 1) {
    toppingsPrice = 1
  }
  else if (toppings.length === 2) {
    toppingsPrice = 2
  }
  else if (toppings.lenght ===3) {
    toppingsPrice = 3
  }
  else {
    toppingsPrice = 4
  }
}

var sizePrice = function sizePrice() {
  if(pizzaSizeOrder === "Small") {
    sizePrice = 1
  }
  else if (pizzaSizeOrder === "Medium") {
    sizePrice = 2
  }
  else {
    sizePrice = 3
  }
}

var totalPrice = function totalPrice(toppingsPrice, sizePrice) {
  return toppingsPrice * sizePrice;
};



//User Interface Logi
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    $("#your-order").show();
    var toppings = [];
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var pizzaToppingOrder = $(this).val();
      toppings.push(pizzaToppingOrder);
      alert(toppings.length);
      var pizzaSizeOrder = $("select#size").val();
      $("#your-order").append(pizzaToppingOrder + "<br>" + pizzaSizeOrder);
    });
    $("#your-price").show();
    var totalPrice = function totalPrice(toppingsPrice, sizePrice) {
      return toppingsPrice * sizePrice;
      $("your-price").append(totalPrice + "<br>");
    };
  });
    // $('#transportation_survey').hide();
});
