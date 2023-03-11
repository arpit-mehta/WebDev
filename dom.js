
//displays all the methods and properties attached to our document object in console
//console.dir(document); 


//these methods and properties can be accessed
// console.log(document.domain);
// console.log(document.URL);
// console.log(document);
// console.log(document.title);
//we can also change these 
//document.title='Items Display'
//check the doctype
//console.log(document.doctype);

//we can also output head or body or links or images....
//console.log(document.head);
//console.log(document.body);
//console.log(document.links);
//console.log(document.images);


//GET ELEMENT BY ID  //
//console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//both these do the same changes
//headerTitle.textContent='Add the items'; 
//inner text also keeps check of the style in HTML tag but textContent doesn't.
//headerTitle.innerText='Added';
//console.log(headerTitle);
//headerTitle.innerHTML= '<h3>Hello</h3>';
//we can also change the style using document.style.CSSproperty
// let header = document.getElementById('main-header');
// header.style.border = 'solid 3px black';


//GET ELEMENTS BY CLASS NAME  //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[3].textContent = 'HELLO';
// items[3].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';
//we have to pick a particular index and then do styling or loop through items.
// for(let i=0; i< items.length;i++){
//     items[i].style.backgroundColor = 'yellow';
// }

// var title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';

