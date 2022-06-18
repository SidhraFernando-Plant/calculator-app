function typeNumber(num) {
  let screenTxtNode = document.getElementById('screen-text');
  screenTxtNode.innerText += num;
}

let numberKeyNodes = document.querySelectorAll('.number-btn');
numberKeyNodes.forEach((key) =>
  key.addEventListener('click', () => typeNumber(key.textContent))
);
