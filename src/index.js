document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.querySelector("#home-page");
  const aboutSection = document.querySelector("#about");
  const missionSection = document.querySelector("#mission");
  const contactSection = document.querySelector("#contact");
  const donationSection = document.querySelector("#donation");
  const getFoodForm = document.querySelector("#get-food-form");

  const navItems = document.querySelectorAll("nav a");

  // Toggle section visibility
  const toggleSection = (id) => {
    navItems.forEach((item) => item.classList.remove("current"));
    document.querySelector(`nav a[href="#${id}"]`).classList.add("current");

    document.querySelectorAll(".hidden-section").forEach((section) => {
      if (section.id === id) {
        section.classList.remove("hidden-section");
      } else {
        section.classList.add("hidden-section");
      }
    });
  };

  // Adding click event listeners to navigation menu
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      toggleSection(item.getAttribute("href").substring(1));
    });
  });

  // Set initial active section
  toggleSection("home-page");

  // Donate button click event
  document.querySelector("#donate-btn-now").addEventListener("click", () => {
    toggleSection("donation");
  });
});
//This code handles the navigation menu and toggles the visibility of sections.

//function to display the donor's Thank you card
function showThankYou() {
  const form = document.getElementById("foodForm");
  const thankYouCard = document.getElementById("thankYouCard");
  thankYouCard.style.display = "block";

  // Display submitted details in the thank you card
  document.getElementById("firstNameDisplay").innerText =
    "First Name: " + form.firstName.value;
  document.getElementById("lastNameDisplay").innerText =
    "Last Name: " + form.lastName.value;
  document.getElementById("contactDisplay").innerText =
    "Contact: " + form.contact.value;
  document.getElementById("foodCategoryDisplay").innerText =
    "Food Category: " + form.foodCategory.value;
  document.getElementById("descriptionDisplay").innerText =
    "Description: " + form.description.value;
  document.getElementById("locationDisplay").innerText =
    "Location: " + form.location.value;
}
