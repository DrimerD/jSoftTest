var send = document.getElementById('send');
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var email = document.getElementById('email');
var country = document.getElementById('country');
var telephone = document.getElementById('telephone');

send.addEventListener("click", function () {
    var status = true;

    if (/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(email.value)) {
        email.style.border = "none";
    } else {
        email.style.border = "2px solid red";
        status = false;
    }

    if (/[A-Za-z]{3,}/.test(firstName.value)) {
        firstName.style.border = "none";
    } else {
        firstName.style.border = "2px solid red";
        status = false;
    }

    if (/[A-Za-z]{3,}/.test(lastName.value)) {
        lastName.style.border = "none";
    } else {
        lastName.style.border = "2px solid red";
        status = false;
    }

    if (/[A-Za-z]{3,}/.test(country.value)) {
        country.style.border = "none";
    } else {
        country.style.border = "2px solid red";
        status = false;
    }

    if (/[0-9]{7,}/.test(telephone.value)) {
        telephone.style.border = "none";
    } else {
        telephone.style.border = "2px solid red";
        status = false;
    }

    if (!status) {
        return;
    } else {
        show();
    }
});

function show () {
    alert("First name : " + firstName.value + ";  Last Name : " +
        lastName.value + "; Email : " + email.value + "; Country : " + country.value + "; Number telephone : " + telephone.value + " ;" );
}
