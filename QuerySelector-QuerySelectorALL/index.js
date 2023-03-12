//QUERY SELECTOR //
//can be used only for one item
// let header = document.querySelector('#main-header');
// header.style.border = 'solid 4px black';
// //grabs the first input by default
// let input = document.querySelector('input');
// input.value = 'Hello!! This is done using querySelector';
// //grabs the type of input 
// let submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';
// //grabs the first item of class list-group-item
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// //grabs the last item of class list-group-item
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// //grabs nth child
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// //grabs nth child
// let secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.visibility = 'hidden';

//QUERY SELECTOR ALL//
//grabs more than 1 item
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello'; 
//select alternate elements
let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0 ; i<odd.length ;i++){
    odd[i].style.backgroundColor='green';
}
let second = document.querySelectorAll('li:nth-child(even)');
for(let i = 0 ; i<second.length ;i++){
    if(i==0){
        second[i].style.color='green';
    }
}
