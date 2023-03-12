//TRAVERSING THE DOM //
let itemList =  document.querySelector('#items');

// //Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='grey';
// //we can keet chaining this using .parentNode 
// console.log(itemList.parentNode.parentElement);

//BOTH PARENT ELEMENT AND PARENT NODE CAN BE USED INTERCHANGEABLY

//Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='grey';
// //we can keet chaining this using .parentNode 
// console.log(itemList.parentElement.parentElement);

// //Child Nodes
// console.log(itemList.childNodes);  //we get an array
// //this also takes into account the html line breaks and gives it as a text in the array we get.
// //childnodes use is not suggested instead use children property

// //Children
// console.log(itemList.children); //this is html collection and not the node list
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //firstchild //includes line break or white space
// console.log(itemList.firstChild);
// //instead use first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'helloFIRST'

// //lastchild //includes line break or white space
// console.log(itemList.lastChild);
// //instead use last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'helloLAST'

//NextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

// //PrevSibling
// console.log(itemList.previousSibling);
// //prevElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor='green';



//CREATING DOM ELEMENTS AND INSERTING AND MANIPULATING THEM

// //createElement
// let newDiv = document.createElement('div');
// //add class to this new div
// newDiv.className = 'hello';
// //add id to new div
// newDiv.id = 'hello1';
// //add attribute
// newDiv.setAttribute('title','hellooo div');
// //inserting content
// let newDivText = document.createTextNode('hellow world');
// newDiv.appendChild(newDivText);
// //insert this into DOM
// let container1 = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// console.log(newDiv);
// container1.insertBefore(newDiv,h1);

//createElement
let newLi = document.createElement('li');
//add class to this new div
newLi.className = 'list-group-item';
//inserting content
let newLiText = document.createTextNode('HEllo');
newLi.appendChild(newLiText);
console.log(newLi);

//inserting before first item
let container = document.querySelector('.list-group');
let item = document.querySelector('.list-group-item');
container.insertBefore(newLi,item);

// container2.insertBefore(newDiv,item1);
