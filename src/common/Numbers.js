const Numbers = {
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '۴',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
  '0': '۰',
};

const reverseNumber = {
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
  '۰': '0',
};

const Orders = [
  'ZEROTH',
  'FIRST',
  'SECOND',
  'THIRD',
  'FOURTH',
  'FIFTH',
  'SIXTH',
  'SEVENTH',
  'EIGHTH',
  'NINTH',
  'TENTH',
  'ELEVENTH',
  'TWELFTH',
  'THIRTEENTH',
  'FOURTEENTH',
  'FIFTEENTH',
  'SIXTEENTH',
  'SEVENTEENTH',
  'EIGHTEENTH',
  'NINETEENTH',
  'TWENTIETH',
  'TWENTY_FIRST',
];

const EnglishNumbers = Object.keys(Numbers);

const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
export const getPersianNumber = number => {
  const _numbers = String(number);
  let _string = '';
  for (let i = 0, len = _numbers.length; i < len; i++) {
    if (Numbers[_numbers[i]]) {
      _string += Numbers[_numbers[i]];
    } else {
      _string += _numbers[i];
    }
  }
  return _string;
};
export const getSeparatedPrice = __price => {
  const price = String(__price)
    .split(',')
    .join('');
  const englishLocal = localeString(price, ',');
  return exchangeNumberToPersian(englishLocal);
};
const exchangeNumberToPersian = num_str => {
  let str = num_str;
  for (let j = 0, len = str.length; j < len * 2; j++) {
    if (Numbers[str[j]]) str = str.substr(0, j) + Numbers[str[j]] + str.substr(j + 1);
  }
  return str;
};

export const getOrderOfNumber = number => Orders[number];
function localeString(x, sep, grp) {
  let sx = `${x}`.split('.'),
    s = '',
    i,
    j;
  sep || (sep = ' '); // default separator
  grp || grp === 0 || (grp = 3); // default grouping
  i = sx[0].length;
  while (i > grp) {
    j = i - grp;
    s = sep + sx[0].slice(j, i) + s;
    i = j;
  }
  s = sx[0].slice(0, i) + s;
  sx[0] = s;
  return sx.join('.');
}

export const changeAllNumberToPersian = _str => {
  const str = String(_str);
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (EnglishNumbers.indexOf(str[i]) !== -1) {
      result += Numbers[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
};

export function isNumber(str) {
  try {
    if (Number(str)) {
      return true;
    }
    const input = String(str);
    for (let i = 0; i < str.length; i++) {
      if (!EnglishNumbers.includes(input[i]) && !persianNumbers.includes(input[i]) && input[i] !== ',') {
        return false;
      }
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function getEnglishNumber(str) {
  try {
    if (Number(str)) {
      return str;
    }
    const input = str.split(',').join('');
    let output = '';
    for (let i = 0; i < input.length; i++) {
      let tmp = '';
      if (Number(input[i])) {
        tmp = input[i];
      } else if (reverseNumber[input[i]]) {
        tmp = reverseNumber[input[i]];
        output += tmp;
      } else {
        return null;
      }
    }
    return Number(output);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const numberToI18N = input => 
  input.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, c => c.charCodeAt(0) & 0xf);

