let operand1;
let operand2;
let operation;

function typeNumber(num) {
  let screenTxtNode = document.getElementById('screen-text');
  if (screenTxtNode.innerText === '0') {
    screenTxtNode.innerText = num;
  } else {
    screenTxtNode.innerText += num;
  }
}

function typeOperation(op) {
  let screenTxtNode = document.getElementById('screen-text');
  operand1 = parseInt(screenTxtNode.innerText);
  screenTxtNode.innerText = '0';
  operation = op;
}

let numberKeyNodes = document.querySelectorAll('.number-btn');
numberKeyNodes.forEach((key) =>
  key.addEventListener('click', () => typeNumber(key.textContent))
);

let opKeyNodes = document.querySelectorAll('.op-btn');
opKeyNodes.forEach((key) =>
  key.addEventListener('click', () => typeOperation(key.textContent))
);
