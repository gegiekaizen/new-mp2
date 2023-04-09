const form = document.getElementById("signupForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const userPassword = document.getElementById("password");
const signupHandler = document.getElementById("signupButton");
const userLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || [];

// SIGNUP FUNCTION
signupHandler.addEventListener("click", (e) => {
	e.preventDefault();

	let newUserInfo = [];
	// console.log(firstName.value.length);
	const validationResult = InputValidation();

	if (validationResult === false) {
		return;
	}

	const userInfo = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		phoneNumber: phoneNumber.value,
		userPassword: userPassword.value,
		isLoggedIn: false,
	};

	//EMAIL VALIDATION
	isEmailExist = userLocalStorage.find((data) => data.email === email.value);

	if (!isEmailExist) {
		if (userLocalStorage?.length !== 0) {
			newUserInfo = [...userLocalStorage, { ...userInfo }]; // ARRAY PUSH
            alert("Successfully Created");
        } else {
			newUserInfo = [{ ...userInfo }];
            alert("Successfully Created");
		}

		localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
		location.reload();
	} else {
		alert("Email already exist");
	}
});

// VALIDATION FUNCTION
function InputValidation() {
	if (firstName.value.length === 0) {
		alert("first name is required");
		return false;
	} else if (lastName.value.length === 0) {
		alert("last name is required");
		return false;
	}
}
