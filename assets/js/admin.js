console.log("admin")
//for adding registration for under admin login
function openRegister() {
    let regsiter = document.getElementById("register-new-employee");
    // regsiter.style.display = "block";
    regsiter.style.height = "460px"
}

//for closing registration for under admin login
function closeRegister() {
    let regsiter = document.getElementById("register-new-employee");
    // regsiter.style.display = "none";
    regsiter.style.height = "0px"
}