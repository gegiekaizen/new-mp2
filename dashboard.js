const usernameDashboard = document.getElementById("usernameDashboard");
        const user = JSON.parse(localStorage.getItem("userInfo"));
        const logoutHandler = document.getElementById("logoutHandler");
        console.log(user);

        let userData = user.find((data) => {
            return data.isLoggedIn === true;
        });

        console.log(userData);

        usernameDashboard.innerHTML = `
            <p>User: ${userData.firstName}</p>
        `;

        logoutHandler.addEventListener("click", (e) => {
            e.preventDefault();

            let newData = user.map((data) => {
                if (data.isLoggedIn === true) {
                    return { ...userData, isLoggedIn: false };
                } else {
                    return data;
                }
            });

            localStorage.setItem("userInfo", JSON.stringify(newData));

            window.location.href = "LoginForm.html";
        });