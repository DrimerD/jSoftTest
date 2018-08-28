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
        email.style.borderBottom  = "none";
    } else {
        email.style.borderBottom  = "2px solid red";
        status = false;
    }

    if (/^([a-z\s]){3,15}$/.test(firstName.value)) {
        firstName.style.borderBottom  = "none";
    } else {
        firstName.style.borderBottom  = "2px solid red";
        status = false;
    }

    if (/^([a-z\s]){3,15}$/.test(lastName.value)) {
        lastName.style.borderBottom  = "none";
    } else {
        lastName.style.borderBottom  = "2px solid red";
        status = false;
    }

    if (country.value) {
        country.style.borderBottom = "none";
    } else {
        country.style.borderBottom = "2px solid red";
    }

    if (/^([0-9]){3,8}$/.test(telephone.value)) {
        telephone.style.borderBottom  = "none";
        document.getElementById('country_code').style.borderBottom  = "none";
    } else {
        telephone.style.borderBottom  = "2px solid red";
        document.getElementById('country_code').style.borderBottom  = "2px solid red";
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
