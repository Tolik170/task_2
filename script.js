const header = document.getElementsByTagName('h1')[0].style.background = 'green';


const block = document.querySelectorAll('#myDiv p')
block[0].style.fontWeight = 'bold';
block[1].style.color = 'red';
block[2].style.textDecoration = 'underline';
block[3].style.fontStyle = 'italic';

const list = document.querySelector('#myList').style.cssText = `
display: flex;
list-style: none;
`
const spanElement = document.getElementsByTagName('span')[0].style.opacity = '0';

