import Texts from './Texts';
import { changeAllNumberToPersian, getPersianNumber } from './Numbers';

class Local {
  constructor() {
    this.language = 'FA';
    this.validLanguages = ['FA', 'EN'];
    this.dictionary = Texts;
    this.items = {};
    // process
    for (let i = 0; i < Object.keys(this.dictionary).length; i++) {
      const item = Object.keys(this.dictionary)[i];
      this.items[item] = item;
    }
  }

  setLanguage(language) {
    if (this.validLanguages.includes(language)) {
      this.language = language;
    }
  }

  get(code) {
    try {
      const text = this.dictionary[code];
      return text[this.language];
    } catch (error) {
      console.error(`Local: get : ${code}`);
      return '';
    }
  }

  getNumber(number) {
    if (this.language === 'FA') {
      return getPersianNumber(number);
    }
    return number;
  }
  
  normalizeNumbers(text) {
    if (this.language === 'FA') {
      return changeAllNumberToPersian(text);
    }
    return text;
  }
}

export default new Local();
