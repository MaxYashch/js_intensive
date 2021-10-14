h = function (callback, thisObject) {
  let filteredArray = [];
  if (thisObject) {
    callback = callback.bind(thisObject);
  }
  let thisLength = this.length;
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
  }
  return filteredArray;
};

const createDebounceFunction = (callback, msc) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, msc);
  };
};
