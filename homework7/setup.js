const displayOperation = document.querySelector('.displayOperation');
const displayMain = document.querySelector('.displayMain');
const tempResult = document.querySelector('.tempResult');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const oppositeEl = document.querySelector('.oppositeSign');
const backspaceEl = document.querySelector('.backspace');
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    displayMain.innerText = dis2Num;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener('click', (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

function clearVar(name = '') {
  dis1Num += dis2Num + ' ' + name + ' ';
  displayOperation.innerText = dis1Num;
  displayMain.innerText = '';
  dis2Num = '';
  tempResult.innerText = result;
}

function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(dis2Num);
  }
}

equalEl.addEventListener('click', () => {
  if (!dis2Num || !dis1Num) return;
  mathOperation();
  clearVar();
  tempResult.innerText = '';
  dis1Num = '';
  if (result.toString().length > 10) {
    result = result.toFixed(8);
  }
  dis2Num = result;
  displayMain.innerText = result;
  haveDot = true;
});

oppositeEl.addEventListener('click', () => {
  if (+displayMain.innerText === 0) {
    return;
  }
  displayMain.innerText = +displayMain.innerText * -1;
  dis2Num = displayMain.innerText;
});

backspaceEl.addEventListener('click', backspace);

function backspace() {
  if (displayMain.innerText) {
    displayMain.innerText = +displayMain.innerText.slice(0, -1);
    dis2Num = displayMain.innerText;
  }
  return;
}

window.addEventListener('keydown', (e) => {
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'
  ) {
    clickButtonEl(e.key);
  } else if (e.key === '+' || e.key === '-' || e.key === '/') {
    clickOperation(e.key);
  } else if (e.key === '*') {
    clickOperation('x');
  } else if (e.key == 'Enter' || e.key === '=') {
    clickEqual();
  } else if (e.key == 'Escape') {
    clearAll();
  } else if (e.key == 'Backspace') {
    backspace();
  }
});

function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}

function clickEqual() {
  equalEl.click();
}

clearAllEl.addEventListener('click', clearAll);

function clearAll() {
  dis1Num = '';
  dis2Num = '';
  result = '';
  displayOperation.innerText = '';
  displayMain.innerText = '';
  tempResult.innerText = '';
  haveDot = false;
}
