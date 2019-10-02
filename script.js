let text = document.querySelector('#text');
let cl = 0;
let arr = [1, 4, 5, 2];

let obj = {
  name: 'Ilham',
  age: [20, 12, 32],
  call: function () {
    console.log('de');
  }
}

function show () {
text.innerHTML = Object.values(obj);
obj.call();
}