//GET ELEMENT BY TAG NAME //
let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[1].textContent = 'HELLO2';
li[2].style.fontWeight = 'bold';
li[3].style.backgroundColor = 'yellow';
// //we have to pick a particular index and then do styling or loop through items.
// for(let i=0; i< li.length;i++){
//     li[i].style.backgroundColor = 'yellow';
// }

// var title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';

