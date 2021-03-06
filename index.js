function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function deepestChild() {
  return document.querySelectorAll('#grand-node div')[3];
}

function increaseRankBy(n) {

  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}