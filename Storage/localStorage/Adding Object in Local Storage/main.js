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
let submit = document.getElementById('submit');
submit.addEventListener('click',addToStorage);

function addToStorage(e){
    e.preventDefault();
    let fname = document.getElementById('name').value;
    let emailId = document.getElementById('email').value;
    let myObj={
        name: fname,
        email: emailId
    };
    //we need to convert it to string
    let myObj_serialized = JSON.stringify(myObj);
  
    //then save it in local storage
    localStorage.setItem('myObj',myObj_serialized);
}
