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
submit.addEventListener("click", addToStorage);

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
  let li = document.createElement("li");
  //add class to this new div
  li.className = "displayDetails";
  //add id to new div
  li.id = "details";
  //inserting content
  let newliText = document.createTextNode(fname+'-'+emailId);
  li.appendChild(newliText);
  //inserting in dom
  let container = document.querySelector('.items');
  container.appendChild(li);
}
