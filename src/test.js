function toReadable (number) {
    let l1 = {1: 'one',
            2: 'two', 
            3: 'three',
            4: 'four',
            5: 'five', 
            6: 'six', 
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
             };
      let l2 = {
           11: 'eleven',
           12: 'twelve',
           13: 'thirteen',
           14: 'fourteen',
           15: 'fifteen', 
           16: 'sixteen',
           17: 'seventeen',
           18: 'eighteen',
           19: 'nineteen',
      }
      let l3 = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty', 
            90: 'ninety',
      }
      let tens
        for (let i = 0;i <= 10;i++) {
          if (i === number) {
          return l1[i]
        }
      }
      for (let i = 11;i < 20;i++) {
        if (i === number) {
          return l2[i]
      }
    }
      for (let i = 20;i < 100;i++) {
        if (number % 10 == 0 && number === i) {
          return l3[i]
        }
        if (number < 30 && i === number) {
          tens = i - 20
          return l3[i - tens] + ' ' + l1[tens]
        }
        if (number < 40 && i === number) {
          tens = i - 30
          return l3[i - tens] + ' ' + l1[tens]
        }
        if (number < 50 && i === number) {
          tens = i - 40
          return l3[i - tens] + ' ' + l1[tens]
        }
            if (number < 60 && i === number) {
          tens = i - 50
          return l3[i - tens] + ' ' + l1[tens]
        }
            if (number < 70 && i === number) {
          tens = i - 60
          return l3[i - tens] + ' ' + l1[tens]
        }
            if (number < 80 && i === number) {
          tens = i - 70
          return l3[i - tens] + ' ' + l1[tens]
        }
            if (number < 90 && i === number) {
          tens = i - 80
          return l3[i - tens] + ' ' + l1[tens]
        }
            if (number < 100 && i === number) {
          tens = i - 90
          return l3[i - tens] + ' ' + l1[tens]
        }
      }
      if (number > 100 && number <= 999) {
        number = String(number)
        let result = ''
        for (let i = 0;i<10;++i) {
        if (i == number[0]) {
          result = l1[i] + ' hundred '
        }
        if (i == number[1]) {
          result = result + l2[i + 10]
        }
        if (i == number[1] && number % 10 == 0) {
          result = result + l3[i]
        }
        if (i == number[2]) {
          result = result + l1[i]
        }
        }
        return result
      }
    }
    console.log(toReadable(111))
    