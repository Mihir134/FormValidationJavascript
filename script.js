// function randomcolor() {
//     let fnum = Math.random() * 255;
//     let secnum = Math.random() * 255;
//     let thinum = Math.random() * 255;
//     return rgb(fnum, secnum, thinum);
// }
// color: rgb(25, 25, 25);
// document.getElementById(body).style.randomcolor();


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});

function checkForm() {
    //alert("Hello i am requested for submit!");

    const FirstName = document.getElementById("FirstName").value;
    const LastName = document.getElementById("LastName").value;
    const inputEmail = document.getElementById("inputEmail").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const inputAddress = document.getElementById("inputAddress").value;
    const inputCity = document.getElementById("inputCity").value;
    const inputCountry = document.getElementById("inputCountry").value;
    const inputState = document.getElementById("inputState").value;
    const Zip = document.getElementById("inputZip").value;
    

    // eror spaces
    const errorFirstName = document.getElementById("errorFirstName");
    const errorLastName = document.getElementById("errorLastName");
    const errorEmail = document.getElementById("errorEmail");
    const errorPhoneNo = document.getElementById("errorPhoneNo");
    const errorAddress = document.getElementById("errorAddress");
    const errorCity = document.getElementById("errorCity");
    const errorCountry = document.getElementById("errorCountry");
    const errorState = document.getElementById("errorState");
    const errorZip = document.getElementById("errorZip");

    // let submit = document.getElementById(submit)
    errorFirstName.textContent = "";
    errorLastName.textContent = "";
    errorEmail.textContent = "";
    errorPhoneNo.textContent = "";
    errorAddress.textContent = "";
    errorCity.textContent = "";
    errorCountry.textContent = "";
    errorState.textContent = "";
    errorZip.textContent = "";


    let isValid = true;

    if (FirstName === "") {
        // alert("i am not ture");
        errorFirstName.textContent = "Please enter First Name";
        errorFirstName.style.color="red";
        isValid = false;
    }else if(/\d/.test(FirstName)){
        errorFirstName.textContent = "Don't Enter numbers";
        errorFirstName.style.color="red";
        isValid = false;
    }

    if (LastName === "") {
        errorLastName.textContent = "Please enter Last Name";
        errorLastName.style.color = "red";
        isValid = false;
    }else if(/\d/.test(LastName)){
        errorLastName.textContent = "Don't Enter numbers";
        errorLastName   .style.color="red";
        isValid = false;
    }

    if (inputEmail === "") {
        errorEmail.textContent = "Please enter a email address.";
        errorEmail.style.color="red"
        isValid = false;
    }else if(!inputEmail.includes("@") || !inputEmail.includes(".")){
        errorEmail.textContent = "Please enter a valid email address.";
        errorEmail.style.color="red"
        isValid = false;
    }

    if (PhoneNumber === "") {
        errorPhoneNo.textContent = "Please enter a Phone number .";
        errorPhoneNo.style.color="red"
        isValid = false;
    }else if(PhoneNumber.length !=10 ){
        errorPhoneNo.textContent = "Please enter a 10 digit phone number.";
        errorPhoneNo.style.color="red"
        isValid = false;
    }

    if (inputAddress === "") {
        errorAddress.textContent = "Please enter Address";
        errorAddress.style.color="red"
        isValid = false;
    }


    if (inputCity === "") {
        errorCity.textContent = "Please Enter City name";
        errorCity.style.color="red"
        isValid = false;
    }

    if (inputCountry === "") {
        errorCountry.textContent = "Please selete Country.";
        errorCountry.style.color="red"
        isValid = false;
    }

    if (inputState === "") {
        errorState.textContent = "Please select state.";
        errorState.style.color="red"
        isValid = false;
    }

    if (Zip === "") {
        errorZip.textContent = "Please Enter Zip Code.";
        errorZip.style.color="red"
        isValid = false;
    }else if(Zip.length<6 || Zip.length>10){
        errorZip.textContent = "Enter min 6 and max 10 digit";
        errorZip.style.color="red"
        isValid = false;
    }
    //alert("Zip lenth is " +Zip.length);
    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        // alert("Form is not submitted successfully!");
        return false;
    }
}

function resetForm(){

    
    errorFirstName.textContent = "";
    errorLastName.textContent = "";
    errorEmail.textContent = "";
    errorPhoneNo.textContent = "";
    errorAddress.textContent = "";
    errorCity.textContent = "";
    errorCountry.textContent = "";
    errorState.textContent = "";
    errorZip.textContent = "";
    
    FirstName.value = "";
    LastName.value = "";
    inputEmail.value = "";
    PhoneNumber.value = "";
    inputAddress.value = "";
    inputCity.value = "";
    inputCountry.value = "";
    inputState.value = "";
    Zip.value = "";
}