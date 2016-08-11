$(document).ready(function() {
  $("form").submit(function(event) {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side2 === side3) {
      $("#equil").show();
      $("#isosceles").hide();
      $("#notriangle").hide();
      $("#scalene").hide();
    }

    if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      $("#scalene").show();
      $("#notriangle").hide();
      $("#equil").hide();
      $("#isosceles").hide();
    }

    if (side1 + side2 < side3 || side1 + side3 < side2 || side3 + side2 < side1) {
      $("#notriangle").show();
      $("#equil").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
    }

    if (side1 === side2 && side1 !== side3 && side1 + side2 >= side3 || side3 === side2 && side3 !== side1 && side3 + side2 >= side1 || side1 === side3 && side1 !== side2 && side1 + side3 >= side2) {
      $("#isosceles").show();
      $("#notriangle").hide();
      $("#equil").hide();
      $("#scalene").hide();
    }

    event.preventDefault();
  });
});
