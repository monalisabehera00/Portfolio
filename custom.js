
$(document).ready(function () {
  // ======================= MENU TOGGLE
  $(".hamburger").click(function () {
    $(".list-darkmode-menu ul").toggleClass("active");
    $(this).toggleClass("active");
  });

  // ======================= FORM VALIDATION
  $("#myForm").submit(function (event) {
    let isValid = true;
    $(".error").text("");

    // Name
    if ($("#username").val().trim() === "") {
      $("#usernameError").text("Name is required");
      isValid = false;
    }

    // Email
    let email = $("#email").val().trim();
    if (email === "") {
      $("#emailError").text("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      $("#emailError").text("Invalid email format");
      isValid = false;
    }

    // Message
    if ($("#message").val().trim() === "") {
      $("#messageError").text("Message is required");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    let pattern = /^[\w.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }
});

// Dark mode toggle
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon
  const icon = toggleBtn.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
