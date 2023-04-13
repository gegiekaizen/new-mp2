// usernameDashboard
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const logoutHandler = document.getElementById("logoutHandler");
      const navLogOut = document.querySelector(".dropstart");
      const removeLogin = document.querySelector(".removeLogin");
      const removeRegister = document.querySelector(".removeRegister");
      const isUserLogin = document.getElementById("isUserLogin")
      const isUserRegister = document.getElementById("isUserRegister")
      const usernameDashboard = document.getElementById("usernameDashboard")
      const isUserLogout = document.getElementById("isUserLogout")

      let userData = user.find((data) => {
        return data.isLoggedIn === true;
      });

      isUserLogin.style.display = !userData ? "block" : "none" 
      isUserRegister.style.display = !userData ? "block" : "none" 
      isUserLogout.innerHTML = userData ? "Logout" : "" 

      usernameDashboard.innerHTML = userData ? userData.email :  ""
      console.log(userData);



      isUserLogout.addEventListener("click", (e) => {
        e.preventDefault();
        let newData = user.map((data) => {
          if (data.isLoggedIn === true) {
            return { ...userData, isLoggedIn: false };
          } else {
            return data;
          }
        });

        localStorage.setItem("userInfo", JSON.stringify(newData));

        window.location.href = "index.html";
      });

      usernameDashboard.innerHTML = `${userData.firstName}`;
      dropstart.innerHTML = `<a class="nav-link text-black p-0" href="Login-page.html"
                        ><span class="hover-underline-animation">Logout</span></a
                      >`;
      removeLogin.innerHTML = "";
      removeRegister.innerHTML = "";

