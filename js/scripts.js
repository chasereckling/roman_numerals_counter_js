var romanizer = function(number) {
  var new_array = [];
  while (number > 0) {
    if (number >= 1000) {
      new_array.push("M")
      number -= 1000;
    }

    else if (number >= 900) {
      new_array.push('CM')
      number -= 900
    }

    else if (number >= 500) {
      new_array.push('D')
      number -= 500;
    }

    else if (number >= 400) {
      new_array.push('CD')
      number -= 400;
    }

    else if (number >= 100) {
      new_array.push('C')
      number -= 100;
    }

    else if (number >= 90) {
      new_array.push('XC')
      number -= 90;
    }

    else if (number >= 50) {
      new_array.push('L')
      number -= 50;
    }

    else if (number >= 40) {
      new_array.push("XL")
      number -= 40;
    }

    else if (number >= 10) {
      new_array.push('X')
      number -= 10;
    }

    else if (number >= 9) {
      new_array.push('IX')
      number -= 9;
    }

    else if (number >= 5) {
      new_array.push('V')
      number -= 5;
    }

    else if (number >= 4) {
      new_array.push('IV')
      number -= 4;
    }

    else if (number >= 1) {
      new_array.push('I')
      number -= 1;
    }
  }
  return new_array.join('');
};
