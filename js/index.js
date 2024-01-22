const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

/*================Email Submision=================== */
const sendMail = () => {
  let params = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    email: document.getElementById("Subject").value,
    message: document.getElementById("Message").value,
  };

  const serviceID = "service_8xzkt3y";
  const templateID = "template_vlzywn9";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("Name").value = "";
      document.getElementById("Email").value = "";
      document.getElementById("Subject").value = "";
      document.getElementById("Message").value = "";
      console.log(res);
      alert("Your message has been sent succesfully");
    })
    .catch((err) => console.log(err));
};
