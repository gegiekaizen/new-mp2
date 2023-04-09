const loginHandler = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const user = JSON.parse(localStorage.getItem("userInfo"));

loginHandler.addEventListener("click", (e) => {
	e.preventDefault();

	const userData = user.find((data) => data.email === email.value);

	if (userData) {
		if (
			email.value === userData.email &&
			password.value === userData.userPassword
		) {
			// SET AUTHENTICATED USER TO LOGGED IN TRUE
			let newData = user.map((data) => {
				if (data.email === userData.email) {
					return { ...userData, isLoggedIn: true };
				} else {
					return data;
				}
			});
			// console.log(newData);
			localStorage.setItem("userInfo", JSON.stringify(newData));
			console.log("login Success");

			window.location.href = "dashboard.html";
		}
	}
	// FALLBACK FOR WRONG INPUT CREDENTIAL
	alert("Invalid Username or password");
});
