var send = document.getElementById('send');
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var email = document.getElementById('email');
var country = document.getElementById('country');
var telephone = document.getElementById('telephone');
var countryCode = document.getElementById('country_code');

var countryObj = [
    {
        name: "Ukraine",
        code: "+380"
    }, {
        name: "Romania",
        code: "+40000"
    }, {
        name: "Russia",
        code: "+7346"
    }, {
        name: "France",
        code: "+7366"
    }, {
        name: "Italy",
        code: "+3938"
    }
];

function setOptionCountry () {
    for (i=0; i < countryObj.length; i++) {
        country.options[country.options.length] = new Option(countryObj[i].name, countryObj[i].name);
    }

    if (localStorage.length > 0) {
        country.selectedIndex = localStorage.getItem('selectedCountryIndex');
        countryCode.value = countryObj[country.selectedIndex-1].code;
    }
};
setOptionCountry();

function setCountry () {
    var selectedCountry = countryObj[country.selectedIndex-1];

    localStorage.setItem('selectedCountryIndex', country.selectedIndex);
    countryCode.value = selectedCountry.code;
};

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

    if (/[0-9]{7,19}/.test(countryCode.value + telephone.value)) {
        telephone.style.border = "none";
        document.getElementById('country_code').style.border = "none";
    } else {
        telephone.style.border = "2px solid red";
        document.getElementById('country_code').style.border = "2px solid red";
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
        lastName.value + "; Email : " + email.value + "; Country : " + country.value + "; Number telephone : " + countryCode.value + telephone.value + " ;" );
};
