module.exports = function toReadable (number){
    let l1 = {
    1: 'one',
    2: 'two', 
    3: 'three',
    4: 'four',
    5: 'five', 
    6: 'six', 
    7: 'seven',
    8: 'eight',
    9: 'nine',
    
     };
     let l2 = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen', 
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
   }
   let l3 = {
     1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty', 
    9: 'ninety',
}
  let result = ''
    for (let i = 1;i <= 10;i++){
      number = String(number)
      if (number == 0) {
        return 'zero'
      }
      if (number == 10) {
        return 'ten'
      }
        if (number.length == 1 && number == i) {
          result += l1[i];
      }
       if (number.length == 2 && number[0] == i && number[1] == 0) { 
          result += l3[i]
          return result
      }
      if (number.length == 2 && number < 20 && number[1] == i) {
        result += l2[i]
        return result
      }
    }
  for (let i = 1;i < 10;i++) {
      if (number.length == 2 && number[0] == i) {
        result += l3[i]
      }
  }
  for (let i = 1;i < 10;i++) {
       if (number.length == 2 && number[1] == i) {
        result = result + ' ' + l1[i]
      }
  }
  for (let i = 1;i < 10;i++) {
    if (number.length == 3 && number[0] == i && number[1] !== '0') {
      result += l1[i] + ' hundred '
    }
    else if (number.length == 3 && number[0] == i && number[2] !== '0') {
        result += l1[i] + ' hundred '
    }
    else if (number.length == 3 && number[0] == i) {
        result += l1[i] + ' hundred'
    }
  }
    for (let i = 1;i < 10;i++) {
    if (number.length == 3 && number[1] + number[2] < 20 && number[2] == i && number[1] !== '0') {
      result = result + l2[i]
      return result
    }
  }
    for (let i = 1;i < 10;i++) {
    if (number.length == 3 && number[1] == i) {
      result = result + l3[i]
    }
  }
    for (let i = 1;i < 10;i++) {
    if (number.length == 3 && number[2] == i && number[1] !== '0') {
      result = result + ' ' + l1[i]
    }
    else if (number.length == 3 && number[2] == i) {
        result = result + l1[i]
    }
  }
  return result
    }