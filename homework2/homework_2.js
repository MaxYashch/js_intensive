function makeObjectDeepCopy(object) {
  if (typeof object === 'object') {
    let cloneObject = {};
    for (const KEY in object) {
      if (typeof object[KEY] === 'object' || Array.isArray(object[KEY])) {
        cloneObject[KEY] = makeObjectDeepCopy(object[KEY]);
      }
      cloneObject[KEY] = object[KEY];
    }
    return cloneObject;
  } else {
    return object;
  }
}

function selectFromInterval(array, firstParam, secondParam) {
  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array!');
  }
  if (!array.every((i) => typeof i === 'number')) {
    throw new Error('First parameter should be an array of numbers!');
  }
  if (
    isNaN(firstParam) ||
    typeof firstParam !== 'number' ||
    !isFinite(firstParam) ||
    firstParam % 1 !== 0 ||
    isNaN(secondParam) ||
    typeof secondParam !== 'number' ||
    !isFinite(secondParam) ||
    secondParam % 1 !== 0
  ) {
    throw new Error('Interval parameters should be valid numbers!');
  }
  return array.filter(
    (a) =>
      a <= Math.max(firstParam, secondParam) &&
      a >= Math.min(firstParam, secondParam)
  );
}

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    let self = this;
    let step = self.from - 1;
    const ITERATOR = {
      next() {
        if (self.to < self.from) {
          throw new Error(
            `Object property 'to' should be much more than property 'from'!`
          );
        }
        if (
          isNaN(self.from) ||
          typeof self.from !== 'number' ||
          !isFinite(self.from) ||
          self.from % 1 !== 0 ||
          isNaN(self.to) ||
          typeof self.to !== 'number' ||
          !isFinite(self.to) ||
          self.to % 1 !== 0
        ) {
          throw new Error(
            `Check the value of property 'to' and property 'from'!`
          );
        }
        step++;
        if (step <= self.to) {
          return { value: step, done: false };
        }
        return { value: null, done: true };
      },
    };
    return ITERATOR;
  },
};
