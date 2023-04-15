// usernameDashboard //
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const logoutHandler = document.getElementById("logoutHandler");
      const navLogOut = document.querySelector(".dropstart");
      const removeLogin = document.querySelector(".removeLogin");
      const removeRegister = document.querySelector(".removeRegister");
      const isUserLogin = document.getElementById("isUserLogin")
      const isUserRegister = document.getElementById("isUserRegister")
      const usernameDashboard = document.getElementById("usernameDashboard")
      const isUserLogout = document.getElementById("isUserLogout")
      const searchInput = document.getElementById("searchInput")
      const searchHandler = document.getElementById("searchHandler")
      const cartIcon = document.getElementById("cartIcon")
      const countIcon = document.getElementById("count")


      let userData = user.find((data) => {
        return data.isLoggedIn === true;
      });
      // HIDE THE CART ICON IF NO USER IS LOG IN
      console.log(userData)
      cartIcon.style.display = userData ? "block" : "none"


      isUserLogin.style.display = !userData ? "block" : "none" 
      isUserRegister.style.display = !userData ? "block" : "none" 
      isUserLogout.innerHTML = userData ? "Logout" : "" 
      countIcon.style.display = userData ? "block" : "none"
      usernameDashboard.innerHTML = userData ? userData.email :  ""
    

      searchHandler.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(productData)
        let inputSearchValue = searchInput.value
        if (inputSearchValue.length === 0) {
          Toastify({
            text: "Input required",
            className: "info",
            position: "center",
            style: {
                background: "black",
            }
        }).showToast();
          return false
        } 

        console.log(searchInput.value)
        const searchData = productData.filter(data => {
          if(data.name.toLowerCase().indexOf(inputSearchValue) > -1)
          {
            return data
          }
        })
        console.log(searchData)
        localStorage.setItem("searchData", JSON.stringify(searchData))
        location.href = "search.html"
      })

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
      navLogOut.innerHTML = !userData ? `<a class="nav-link text-black p-0" href="Login-page.html"
                        ><span class="hover-underline-animation">Logout</span></a
                      >` : "";
      removeLogin.innerHTML = "";
      removeRegister.innerHTML = "";

