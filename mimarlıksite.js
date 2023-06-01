
const draggable = document.getElementById('draggable');
const link = document.getElementById('link');
const myDiv = document.getElementById('target');
const yazi = document.getElementById('bilgi1');

myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundColor = 'blue';
    myDiv.style.left = '364px';
});


yazi.addEventListener('mouseover', () => {
  myDiv.style.backgroundColor = 'red';
  myDiv.style.left = '364px';
});

yazi.addEventListener('mouseout', () => {
  myDiv.style.backgroundColor = 'red';
  myDiv.style.left = '364px';
});

draggable.addEventListener('mouseout', () => {
    myDiv.style.backgroundColor = 'red';
    myDiv.style.left = '0px';
});

