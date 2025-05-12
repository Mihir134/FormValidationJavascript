
// file priview 

const input = document.getElementById('Photo');
const preview = document.getElementById('priviewImg');

input.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

const filePhoto = document.getElementById('Photo');
const filepathphoto = document.getElementById('filepathphoto')

filePhoto.addEventListener('change', function () {
    if (filePhoto.files.length > 0) {
        const selectedFile = filePhoto.files[0];
        filepathphoto.textContent = selectedFile.name;
    } else {
        filepathphoto.textContent = '';
    }
});

// date valication

const PostedDate = document.getElementById('PostedDate');
const ApplicationDate = document.getElementById('ApplicationDate');


const today = new Date().toISOString().split('T')[0];

PostedDate.min = today;

PostedDate.addEventListener('change', () => {
    const selectedDate = PostedDate.value;
    ApplicationDate.min = selectedDate; 
    if (ApplicationDate.value && ApplicationDate.value < selectedDate) {
        ApplicationDate.value = ''; 
    }
});



document.getElementById('resume').addEventListener('change', function (event) {
    const previewContainer = document.getElementById('priviewresume');
    previewContainer.innerHTML = ''; // Clear previous previews

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileURL = URL.createObjectURL(file);

        const iframe = document.createElement('iframe');
        iframe.src = fileURL;
        iframe.width = "500px";
        iframe.height = "300px";
        previewContainer.appendChild(iframe);
    }
});
const resumepath = document.getElementById('resume');
const filepathresume = document.getElementById('filepathresume')

resumepath.addEventListener('change', function () {
    if (resumepath.files.length > 0) {
        const selectedFile = resumepath.files[0];
        filepathresume.textContent = selectedFile.name;
    } else {
        filepathresume.textContent = '';
    }
});


const passwordInput = document.getElementById('password');
const toggleIcon = document.getElementById('togglePassword');

toggleIcon.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
});


const cpasswordInput = document.getElementById('conformPassword');
const ctoggleIcon = document.getElementById('ctogglePassword');

ctoggleIcon.addEventListener('click', () => {
    const isPassword = cpasswordInput.type === 'password';
    cpasswordInput.type = isPassword ? 'text' : 'password';
    ctoggleIcon.classList.toggle('fa-eye');
    ctoggleIcon.classList.toggle('fa-eye-slash');
});








document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});


function firstname() {
    const FirstName = document.getElementById("FirstName").value;
    const errorFirstName = document.getElementById("errorFirstName");

    if (FirstName === "") {
        // alert("i am not ture");
        errorFirstName.textContent = "Please enter First Name";
        errorFirstName.style.color = "red";
        isValid = false;
    } else if (/\d/.test(FirstName)) {
        errorFirstName.textContent = "Don't Enter numbers";
        errorFirstName.style.color = "red";
        isValid = false;
    } else {
        errorFirstName.textContent = "";
    }
}

function lastname() {
    const LastName = document.getElementById("LastName").value;
    const errorLastName = document.getElementById("errorLastName");
    if (LastName === "") {
        errorLastName.textContent = "Please enter Last Name";
        errorLastName.style.color = "red";
        isValid = false;
    } else if (/\d/.test(LastName)) {
        errorLastName.textContent = "Don't Enter numbers";
        errorLastName.style.color = "red";
        isValid = false;
    } else {
        errorLastName.textContent = "";
    }
}

function emailname() {
    const inputEmail = document.getElementById("inputEmail").value;
    const errorEmail = document.getElementById("errorEmail");
    if (inputEmail === "") {
        errorEmail.textContent = "Please enter a email address.";
        errorEmail.style.color = "red"
        isValid = false;
    } else if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
        errorEmail.textContent = "Please enter a valid email address.";
        errorEmail.style.color = "red"
        isValid = false;
    } else {
        errorEmail.textContent = "";
    }
}


function phoneNumber() {
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const errorPhoneNo = document.getElementById("errorPhoneNo");
    if (PhoneNumber === "") {
        errorPhoneNo.textContent = "Please enter a Phone number .";
        errorPhoneNo.style.color = "red"
        isValid = false;
    } else if (PhoneNumber.length != 10) {
        errorPhoneNo.textContent = "Please enter a 10 digit phone number.";
        errorPhoneNo.style.color = "red"
        isValid = false;
    } else {
        errorPhoneNo.textContent = "";
    }
}

function addressInput() {
    const inputAddress = document.getElementById("inputAddress").value;
    const errorAddress = document.getElementById("errorAddress");
    if (inputAddress === "") {
        errorAddress.textContent = "Please enter Address";
        errorAddress.style.color = "red"
        isValid = false;
    } else {
        errorAddress.textContent = "";
    }
}

function cityinput() {
    const inputCity = document.getElementById("inputCity").value;
    const errorCity = document.getElementById("errorCity");
    if (inputCity === "") {
        errorCity.textContent = "Please Enter City name";
        errorCity.style.color = "red"
        isValid = false;
    } else {
        errorCity.textContent = "";
    }
}

function countryin() {
    const inputCountry = document.getElementById("inputCountry").value;
    const errorCountry = document.getElementById("errorCountry");
    if (inputCountry === "") {
        errorCountry.textContent = "Please selete Country.";
        errorCountry.style.color = "red"
        isValid = false;
    } else {
        errorCountry.textContent = "";

    }
}

function statein() {
    const inputState = document.getElementById("inputState").value;
    const errorState = document.getElementById("errorState");
    if (inputState === "") {
        errorState.textContent = "Please select state.";
        errorState.style.color = "red"
        isValid = false;
    } else {
        errorState.textContent = "";
    }
}

function zipin() {
    const Zip = document.getElementById("inputZip").value;
    const errorZip = document.getElementById("errorZip");
    if (Zip === "") {
        errorZip.textContent = "Please Enter Zip Code.";
        errorZip.style.color = "red"
        isValid = false;
    } else if (Zip.length < 6 || Zip.length > 10) {
        errorZip.textContent = "Enter min 6 and max 10 digit";
        errorZip.style.color = "red"
        isValid = false;
    } else {
        errorZip.textContent = "";
    }
}

function passwordin() {
    const password = document.getElementById("password").value;
    const errorpassword = document.getElementById("errorpassword");
    // alert("ad");
    if (password === "") {

        errorpassword.textContent = "Password Requried."
        errorpassword.style.color = "red"
        isValid = false;
    } else if (password.length < 6 || password.length > 10) {
        errorpassword.textContent = "Password length should be between 6 to 10 catectors."
        errorpassword.style.color = "red"
        isValid = false;
    } else if (!password.includes("@") && !password.includes("_") && !password.includes("#")) {
        errorpassword.textContent = `Password should Contain special crecretore like "@, _ or #"`
        errorpassword.style.color = "red"
        isValid = false;
    } else {
        errorpassword.textContent = "";
    }
}

function conpassin() {
    const password = document.getElementById("password").value;

    const conformPassword = document.getElementById("conformPassword").value;
    const errorConformPassword = document.getElementById("errorConformPassword");
    if (password != conformPassword) {
        errorConformPassword.textContent = `Password and conform password is not same.`
        errorConformPassword.style.color = "red"
        isValid = false;

        // alert(password + " Not same " + conformPassword)
    } else {
        errorConformPassword.textContent = "";
    }
}

function photoin() {
    const fileInput = document.getElementById('Photo');
    const fileError = document.getElementById('errorPhoto');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];

        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png'];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (!allowedTypes.includes(file.type)) {
                fileError.textContent = 'Invalid file type. Only JPG and PNG files are allowed.';
                fileError.style.color = "red"
                fileInput.value = ''; // Clear the input
            } else if (file.size > maxSize) {
                fileError.textContent = 'File size exceeds the limit of 2MB.';
                fileInput.value = ''; // Clear the input
            } else {
                fileError.textContent = ''; // Clear previous error
                // Proceed with file upload or other actions
                console.log('File is valid:', file.name, file.type, file.size);
            }
        }
    });
}

function resumein() {
    const fileInput = document.getElementById('resume');
    const fileError = document.getElementById('errorResume');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];

        if (file) {
            const allowedTypes = ['application/pdf'];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (!allowedTypes.includes(file.type)) {
                fileError.textContent = 'Invalid file type. Only PDF files are allowed.';
                fileError.style.color = "red"

                fileInput.value = ''; // Clear the input
            } else if (file.size > maxSize) {
                fileError.textContent = 'File size exceeds the limit of 2MB.';
                fileInput.value = ''; // Clear the input
            } else {
                fileError.textContent = ''; // Clear previous error
                // Proceed with file upload or other actions
                console.log('File is valid:', file.name, file.type, file.size);
            }
        }
    });
}

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
    const password = document.getElementById("password").value;
    const conformPassword = document.getElementById("conformPassword").value;
    const Photo = document.getElementById('Photo').value;
    const resume = document.getElementById('resume').value;


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
    const errorpassword = document.getElementById("errorpassword")
    const errorConformPassword = document.getElementById("errorConformPassword");
    const errorPhoto = document.getElementById('errorPhoto');

    const errorResume = document.getElementById('errorResume');


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
    errorpassword.textContent = "";
    errorConformPassword.textContent = "";
    errorPhoto.textContent = "";
    errorResume.textContent = "";

    let isValid = true;

    if (FirstName === "") {
        // alert("i am not ture");
        errorFirstName.textContent = "Please enter First Name";
        errorFirstName.style.color = "red";
        isValid = false;
    }
    if (LastName === "") {
        errorLastName.textContent = "Please enter Last Name";
        errorLastName.style.color = "red";
        isValid = false;
    }
    if (inputEmail === "") {
        errorEmail.textContent = "Please enter a email address.";
        errorEmail.style.color = "red"
        isValid = false;
    }
    if (PhoneNumber === "") {
        errorPhoneNo.textContent = "Please enter a Phone number .";
        errorPhoneNo.style.color = "red"
        isValid = false;
    }
    if (inputAddress === "") {
        errorAddress.textContent = "Please enter Address";
        errorAddress.style.color = "red"
        isValid = false;
    }
    if (inputCity === "") {
        errorCity.textContent = "Please Enter City name";
        errorCity.style.color = "red"
        isValid = false;
    }
    if (inputCountry === "") {
        errorCountry.textContent = "Please selete Country.";
        errorCountry.style.color = "red"
        isValid = false;
    }
    if (inputState === "") {
        errorState.textContent = "Please select state.";
        errorState.style.color = "red"
        isValid = false;
    }
    if (Zip === "") {
        errorZip.textContent = "Please Enter Zip Code.";
        errorZip.style.color = "red"
        isValid = false;
    } else if (Zip.length < 6 || Zip.length > 10) {
        errorZip.textContent = "Enter min 6 and max 10 digit";
        errorZip.style.color = "red"
        isValid = false;
    }
    if (password === "") {
        errorpassword.textContent = "Password Requried."
        errorpassword.style.color = "red"
        isValid = false;
    } else if (password.length < 6 || password.length > 10) {
        errorpassword.textContent = "Password length should be between 6 to 10 catectors."
        errorpassword.style.color = "red"
        isValid = false;
    }
    if (password != conformPassword) {
        errorConformPassword.textContent = `Password and conform password is not same.`
        errorConformPassword.style.color = "red"
        isValid = false;

        // alert(password + " Not same " + conformPassword)
    }
    if (resume === "") {
        errorResume.textContent = "Please Select resume";
        errorResume.style.color = "red";
        isValid = false;
    }

    if (Photo === "") {
        errorPhoto.textContent = "Please Select Photo"
        errorPhoto.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        // alert("Form is not submitted successfully!");
        return false;
    }
}
function resetForm() {
    errorFirstName.textContent = "";
    errorLastName.textContent = "";
    errorEmail.textContent = "";
    errorPhoneNo.textContent = "";
    errorAddress.textContent = "";
    errorCity.textContent = "";
    errorCountry.textContent = "";
    errorState.textContent = "";
    errorZip.textContent = "";
    errorpassword.textContent = "";
    errorConformPassword.textContent = "";
    errorPhoto.textContent = "";
    errorResume.textContent = "";
    FirstName.value = "";
    LastName.value = "";
    inputEmail.value = "";
    PhoneNumber.value = "";
    inputAddress.value = "";
    inputCity.value = "";
    inputCountry.value = "";
    inputState.value = "";
    Zip.value = "";

    password.value = "";
    conformPassword.value = "";
    Photo.value = "";
    resume.value = "";
}
