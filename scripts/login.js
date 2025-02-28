let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault;
  let mobileNumber = document.getElementById("mobile-number").value;
  let pinNumber = document.getElementById("pin-number").value;
  let covPin = parseInt(pinNumber);
  if (mobileNumber.length === 11) {
    if (covPin === 1234) {
      window.location.href = "./home.html";
    } else {
      alert("PIN Error");
    }
  } else {
    alert("Number Error");
  }
});
