const concatStrings = (() => {
  let strings = [];
  let lastSeparator;
  const concat = (string, separator) => {
    if (typeof string === 'string') {
      strings.push(string);
      if (typeof separator === 'string') {
        lastSeparator = separator;
      }
      return concat;
    } else {
      let result = strings.join(lastSeparator || '');
      strings = [];
      lastSeparator = null;
      return result;
    }
  };
  return concat;
})();

class Calculator {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }
  get firstValue() {
    return this._firstValue;
  }
  set firstValue(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('First number should be valid!');
    }
    this._firstValue = value;
  }
  get secondValue() {
    return this._secondValue;
  }
  set secondValue(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('Second number should be valid!');
    }
    this._secondValue = value;
  }
  setX(num) {
    if (!Number.isSafeInteger(num)) {
      throw new Error('First number should be valid!');
    }
    this._firstValue = num;
  }
  setY(num) {
    if (!Number.isSafeInteger(num)) {
      throw new Error('Second number should be valid!');
    }
    this._secondValue = num;
  }
  logSum() {
    console.log(this._firstValue + this._secondValue);
  }
  logMul() {
    console.log(this._firstValue * this._secondValue);
  }
  logSub() {
    console.log(this._firstValue - this._secondValue);
  }
  logDiv() {
    if (this._secondValue === 0) {
      throw new Error('Second number should not be 0!');
    }
    console.log(this._firstValue / this._secondValue);
  }
}
