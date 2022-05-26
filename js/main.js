function qiymat() {

    var number = [];
  
    while (true) {
  
      var value = prompt("qiymat yozing");

      if (value === " " || value === null || !isFinite(value)) break;
      number.push(+value);

    }
  
    var sum = 1;
    for (var i = 1 ; i<number.length; i++) {
      sum += number[i];
    }
    return sum;
  }
  
  alert( qiymat() );

