const store=document.getElementById("event")
store.addEventListener("submit",function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
})

window.addEventListener("DOMContentLoaded", () => {//imp
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';//it will vanish the values inserted by users after we submit nice trick 
    document.getElementById('firstname').value = '';
    document.getElementById('phonenumber').value ='';
    // console.log(localStorage.getItem(user.emailId))
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}' class="btn btn-sm btn-outline-danger  m-2" )> Delete User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}




// deleteUser('abc@gmail.com')

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
