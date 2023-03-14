let submit = document.getElementById('submit');

submit.addEventListener('click',addToStorage);

function addToStorage(e){
    e.preventDefault();
    let fname = document.getElementById('name').value;
    let emailId = document.getElementById('email').value;

    localStorage.setItem(fname,emailId);
}

