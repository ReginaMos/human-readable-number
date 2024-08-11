module.exports = function toReadable (number) {
  let hundreds = Math.floor(number/100);
  let decimals = Math.floor(number/10) - hundreds*10;
  let units = number - hundreds * 100 - decimals * 10;

  let res_unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let res_dec_1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let res_dec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
  let result = '';

  if(units == 0 && hundreds ==0 && decimals==0) {
    return res_unit[units];
  }

  if (hundreds!=0) {
    result += res_unit[hundreds] + ' hundred';
  }

  if(decimals != 0) {
    if(hundreds > 0) {
      result += ' ';
    }
    if(decimals > 1) {
      result += res_dec[decimals-2];
    }

    else {
      result += res_dec_1[units];
      return result;
    }
  }

  if(units != 0) {
    if(decimals > 0 || hundreds > 0) {
      result += ' ';
    }
    result += res_unit[units];
  }

  return result;
}
