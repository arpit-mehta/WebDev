let form = document.getElementById('addForm');
let itemList =document.getElementById('items');

let items= document.getElementsByClassName('list-group-item');



for(let i=0;i<items.length;i++){
    let edit1 = document.createElement('button');
    edit1.className = 'btn btn-success float-right btn-sm rounded-0';
    let editText1 = document.createTextNode('EDIT');
    edit1.appendChild(editText1);
    itemList.children[i].appendChild(edit1);
}

//Form submit event 
form.addEventListener('submit',addItem);
//this means whenever using submit button we submit our form addItem function will be called

//delete event
itemList.addEventListener('click',removeItem)

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    let newValue = document.getElementById('item').value;

    //create new li element
    let newLi = document.createElement('li');

    //addding class name to new li element
    newLi.className = 'list-group-item';

    //inserting content
    let newLiText = document.createTextNode(newValue);
    newLi.appendChild(newLiText);

    //create delete and edit button element
    let button = document.createElement('button');
    let edit = document.createElement('button');


    //add class name to button
    button.className = 'btn btn-danger btn-sm float-right delete';
    edit.className = 'btn btn-success float-right btn-sm rounded-0';

    //inserting content
    let btnText = document.createTextNode('X');
    button.appendChild(btnText);
    let editText = document.createTextNode('EDIT');
    edit.appendChild(editText);

    //add into our list
    itemList.appendChild(newLi);
    newLi.appendChild(button);
    newLi.appendChild(edit);
}

//function to delete item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
