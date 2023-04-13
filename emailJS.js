const emailInput = document.getElementById("emailInput");
const sendEmailHandler = document.getElementById("sendEmailHandler");

(function () {
  emailjs.init("X4bJv2F4WHUszxa4D");
})();

sendEmailHandler.addEventListener("click", (e) => {
  e.preventDefault();
  
let userEmail = emailInput.value;
  if (userEmail.length === 0) {
    Toastify({
        text: "Input Required",
        className: "info",
        position: "center",
        style: {
            background: "black",
        }
    }).showToast();
    return false;
  }

  let serviceID = "service_32pam55";
  let templateID = "template_ediqzxg";
  let templateParams = {
    from_name: "Kaizen Loft Tech",
    to_name: userEmail,
  };
  let publicKey = "X4bJv2F4WHUszxa4D";

  emailjs.send(serviceID, templateID, templateParams, publicKey).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  Toastify({
    text: "You are now subscribed to newsletter",
    className: "info",
    position: "center",
    style: {
        background: "black",
    }
}).showToast();
  emailInput.value = "";
  

});