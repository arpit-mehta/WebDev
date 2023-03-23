// //Storing single user details in the local Storage
// let submit = document.getElementById('submit');
// submit.addEventListener('click',addToStorage);

// function addToStorage(e){
//     e.preventDefault();
//     let fname = document.getElementById('name').value;
//     let emailId = document.getElementById('email').value;

//     localStorage.setItem(fname,emailId);
// }

//Storing the data as object in the storage
let submit = document.getElementById("submit");
let itemList =document.getElementById('items');

submit.addEventListener("click", addToStorage);
itemList.addEventListener('click',removeItem);

function addToStorage(e) {
  e.preventDefault();
  let fname = document.getElementById("name").value;
  let emailId = document.getElementById("email").value;
  let myObj = {
    name: fname,
    email: emailId,
  };
  let myObj_serialized = JSON.stringify(myObj);
  localStorage.setItem(emailId, myObj_serialized);

  //createElement
  let li = document.createElement('li');
  let del = document.createElement('button');
  //add class to this new div
  li.className = "displayDetails";
  del.className = 'btn-danger delete btn-sm rounded-0'
  //add id to new div
  li.id = "details";
  del.id='delete';
  //inserting content
  let newliText = document.createTextNode(fname+'-'+emailId);
  let deleteText = document.createTextNode('DELETE');
  li.appendChild(newliText);
  del.appendChild(deleteText);
  //inserting in dom
  let container = document.querySelector('#items');
  container.appendChild(li);
  li.appendChild(del);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            let textData = li.textContent;
            const keyValue = textData.substring(textData.indexOf('-')+1, textData.indexOf("D"));
            console.log(keyValue);
            itemList.removeChild(li);
            localStorage.removeItem(keyValue);
        }
    }
}
